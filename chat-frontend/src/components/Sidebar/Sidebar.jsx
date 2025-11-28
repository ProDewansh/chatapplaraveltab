import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineMore } from "react-icons/ai";
const Sidebar = () => {
 const [active,setActive]=useState("All");
  return (
    <div className="sidebar">
      
      {/* Top Header */}
      <div className="header-bar">
        <p className="app-title">ChatApp</p>
        <button className="menu-btn"><AiOutlineMore /></button>
      </div>

      <div className="top-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* <div className="message-bar">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Unread</button>
        <button className="filter-btn">Favourites</button>
        <button className="filter-btn">Groups</button>
      </div> */}

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
        <div className="chat-item">
          <img src="https://i.pravatar.cc/50" />
          <div>
            <h4>Dewansh</h4>
            <p>Hey bro, what's up?</p>
          </div>
        </div>

        <div className="chat-item">
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
