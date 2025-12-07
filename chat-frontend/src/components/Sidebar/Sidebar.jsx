import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineMore } from "react-icons/ai";

const Sidebar = () => {
  const [active,setActive]=useState("All");
  const [showMenu, setShowMenu] = useState(false);  
  const [hoveredChat, setHoveredChat] = useState(null); // ✅ hover state

  return (
    <div className="sidebar">
      {/* Top Header */}
      <div className="header-bar">
        <p className="app-title">ChatApp</p>
        <div className="menu-wrapper">
          <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}><AiOutlineMore /></button>
          {showMenu && (
            <div className="dropdown-menu">
              <a href="#">Profile</a>
              <a href="#">New Group</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>

      <div className="top-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="message-bar">
        {["All", "Unread", "Favourites", "Groups"].map((item) => (
          <button
            key={item}
            className={`filter-btn ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="chat-list">
  <div
    className="chat-item testbg"
    onMouseEnter={() => setHoveredChat(1)}
    onMouseLeave={() => setHoveredChat(null)}
    style={{
      backgroundColor: hoveredChat === 1 ? "#2a2a2a" : "black",
      color: hoveredChat === 1 ? "white" : "inherit",
      transition: "background 0.2s ease"
    }}
  >
    <img src="https://i.pravatar.cc/50" />
    <div>
      <h4>Dewansh</h4>
      <p>Hey bro, what's up?</p>
    </div>
  </div>

  <div
    className="chat-item testbg"
    onMouseEnter={() => setHoveredChat(2)}
    onMouseLeave={() => setHoveredChat(null)}
    style={{
      backgroundColor: hoveredChat === 2 ? "#2a2a2a" : "black", // ✅ greyish hover now
      color: hoveredChat === 2 ? "white" : "inherit",
      transition: "background 0.2s ease"
    }}
  >
    <img src="https://i.pravatar.cc/51" />
    <div>
      <h4>React Group</h4>
      <p>New message from Amit...</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Sidebar;
