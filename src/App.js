import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import ChatbotComponent from './components/ChatbotComponent'
import 'react-chatbot-kit/build/main.css';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
             <Sidebar></Sidebar>
                <div id="colorlib-main">
                    <Introduction></Introduction>
                    <About></About>
                    <Timeline></Timeline>
                    <div className="chatbot-popup">
                      <ChatbotComponent />
                    </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;