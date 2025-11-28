import React from "react";
import MessageInput from "../MessageInput/MessageInput";
import "./ChatWindow.css";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="top-bar-chat">
      <div className="chat-item">
          <img src="https://i.pravatar.cc/50" /> 
          <h3>Dewansh Kumar</h3>
       </div>
      </div>

      <div className="messages-area">
        <div className="message self">
          <div className="bubble">Hello! 😎</div>
        </div>

        <div className="message other">
          <div className="bubble">Hey bro! 👋</div>
        </div>
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;
