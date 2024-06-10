import UploadFiles from "./widgets/UploadFiles";

const config = {
  botName: "ChatBot",
  initialMessages: [
    {
      type: "bot",
      message: "Hi, I'm here to help you. Ask me anything!"
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },

  widgets: [
    {
      widgetName: "uploadFiles",
      widgetFunc: (props) => <UploadFiles/>
    }
  
  ]
};

export default config;