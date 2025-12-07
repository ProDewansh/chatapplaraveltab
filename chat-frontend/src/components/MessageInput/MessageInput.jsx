import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

import "./MessageInput.css";

const MessageInput = () => {
  return (
    <div className="input-area">
      {/* Hidden file input */}
      <input type="file" className="file-uploader" id="file-upload" style={{ display: "none" }} />

      {/* Paperclip icon using original class */}
      <label htmlFor="file-upload" className="file-uploader">
        <BsPaperclip size={24} color="#075E54" />
      </label>

      <input
        type="text"
        placeholder="Type a message..."
        className="msg-input"
      />

      <button className="send-btn"><AiOutlineSend /></button>
    </div>
  );
};

export default MessageInput;
