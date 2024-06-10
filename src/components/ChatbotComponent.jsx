import React from 'react';
import ChatBot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import { Resizable } from 're-resizable';

function ChatbotComponent() {
  return (
    <Resizable
      defaultSize={{width: 400, height: 500}}
    >
      <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </Resizable>
  );
}

export default ChatbotComponent;