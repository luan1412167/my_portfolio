import React from 'react';
// eslint-disable-next-line
import { ChatOpenAI } from '@langchain/openai' 
// eslint-disable-next-line
import { HumanMessage } from "@langchain/core/messages"
import { StringOutputParser } from "@langchain/core/output_parsers";
import dotenv from 'dotenv'
dotenv.config();


class ActionProvider extends React.Component {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and 
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    super();
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    // console.log(process.env.REACT_APP_OPENAI_API_KEY);
    this.chatOpenAI = new ChatOpenAI({"apiKey": process.env.REACT_APP_OPENAI_API_KEY, "modelName": "gpt-3.5-turbo"});
    this.parser = new StringOutputParser();

  }
  handleUploadFiles = () => {
    const message = this.createChatBotMessage(
      "Sure, I can help you with that. Please upload the files.",
      {
        widget: "uploadFiles",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  // You can define methods here to define how the bot should respond to certain actions
  greet() {
    const message = this.createChatBotMessage("Hello, how can I help you?");
    this.addMessageToState(message);
  }

  async chat(userMessage) {
    const message = await this.chatOpenAI.invoke([new HumanMessage({content: userMessage})])
    let parsed_message = await this.parser.invoke(message);
    console.log("message Output", parsed_message);
    parsed_message = this.createChatBotMessage(parsed_message);
    this.addMessageToState(parsed_message);
  }

  addMessageToState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;