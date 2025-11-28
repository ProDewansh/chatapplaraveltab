import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";

const ChatDashboard = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f5f7fb"
  },
};

export default ChatDashboard;
