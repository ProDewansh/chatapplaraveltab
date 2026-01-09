// import React from "react";
// import MessageInput from "../MessageInput/MessageInput";
// import "./ChatWindow.css";

// const ChatWindow = () => {
//   return (
//     <div className="chat-window">
//       <div className="top-bar-chat">
//       <div className="chat-item">
//           <img src="https://i.pravatar.cc/50" /> 
//           <h3>Dewansh Kumar</h3>
//        </div>
//       </div>

//       <div className="messages-area">
//         <div className="message self">
//           <div className="bubble">Hello! 😎</div>
//         </div>

//         <div className="message other">
//           <div className="bubble">Hey bro! 👋</div>
//         </div>
//       </div>

//       <MessageInput />
//     </div>
//   );
// };

// export default ChatWindow;

// import React, { useEffect } from "react";
// import MessageInput from "../MessageInput/MessageInput";
// import "./ChatWindow.css";
// import { echo } from "../../echo";

// const ChatWindow = ({ conversationId, messages, setMessages }) => {

//   useEffect(() => {
//     if (!conversationId) return;

//     console.log("🔗 Subscribing to:", `chat.${conversationId}`);

//     const channel = echo.private(`chat.${conversationId}`);

//     channel.listen("MessageSent", (event) => {
//       console.log("📩 New message received:", event.message);

//       setMessages((prev) => [...prev, event.message]);
//     });

//     // Cleanup when change chat
//     return () => {
//       echo.leave(`private-chat.${conversationId}`);
//     };

//   }, [conversationId]);

//   return (
//     <div className="chat-window">
      
//       <div className="top-bar-chat">
//         <div className="chat-item">
//           <img src="https://i.pravatar.cc/50" />
//           <h3>Dewansh Kumar</h3>
//         </div>
//       </div>

//       <div className="messages-area">
//         {messages.length === 0 ? (
//           <div className="no-message">
//             <p>Select a user & start chatting 😊</p>
//           </div>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message ${msg.sender_id === window.userId ? "self" : "other"}`}
//             >
//               <div className="bubble">{msg.message}</div>
//             </div>
//           ))
//         )}
//       </div>

//       <MessageInput conversationId={conversationId} />
//     </div>
//   );
// };

// export default ChatWindow;


import React, { useEffect, useRef } from "react";
import MessageInput from "../MessageInput/MessageInput";
import "./ChatWindow.css";
import echo from "../../echo"; // Changed from { echo } to default import

const ChatWindow = ({ conversationId, messages, setMessages }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!conversationId) return;

    console.log("🔗 Subscribing to:", `chat.${conversationId}`);

    const channel = echo.private(`chat.${conversationId}`);

    channel.listen("MessageSent", (event) => {
      console.log("📩 New message received:", event.message);

      // Prevent duplicate messages
      setMessages((prev) => {
        const isDuplicate = prev.some(msg => msg.id === event.message.id);
        if (isDuplicate) return prev;
        return [...prev, event.message];
      });
    });

    // Error handling
    channel.error((error) => {
      console.error("❌ WebSocket error:", error);
    });

    // Cleanup when changing chat
    return () => {
      console.log("🔌 Leaving channel:", `chat.${conversationId}`);
      echo.leave(`private-chat.${conversationId}`);
    };

  }, [conversationId, setMessages]);

  return (
    <div className="chat-window">
      
      <div className="top-bar-chat">
        <div className="chat-item">
          <img src="https://i.pravatar.cc/50" alt="User Avatar" />
          <h3>Dewansh Kumar</h3>
        </div>
      </div>

      <div className="messages-area">
        {messages.length === 0 ? (
          <div className="no-message">
            <p>Select a user & start chatting 😊</p>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`message ${msg.sender_id === window.userId ? "self" : "other"}`}
              >
                <div className="bubble">{msg.message}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <MessageInput conversationId={conversationId} />
    </div>
  );
};

export default ChatWindow;