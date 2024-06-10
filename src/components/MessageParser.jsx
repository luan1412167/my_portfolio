import React from 'react';

class MessageParser extends React.Component {
  constructor(actionProvider) {
    super();
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    else if (
      lowerCaseMessage.includes("upload") ||
      lowerCaseMessage.includes("file") ||
      lowerCaseMessage.includes("files")
    ) {
      return this.actionProvider.handleUploadFiles();
    }
    else{
      console.log("typed message", message);
      this.actionProvider.chat(message);
    }
  }
}

export default MessageParser;