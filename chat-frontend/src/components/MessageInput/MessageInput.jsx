import React from "react";
import "./MessageInput.css";

const MessageInput = () => {
  return (
    <div className="input-area">
      <input type="file" className="file-uploader" />

      <input
        type="text"
        placeholder="Type a message..."
        className="msg-input"
      />

      <button className="send-btn">Send</button>
    </div>
  );
};

export default MessageInput;
