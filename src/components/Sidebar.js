//Sidebar
import "./Sidebar.css";
import { DataContext } from "./LandingPage";
import React, { useState, useContext, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Functionalities, DirectMessage } from "./Data";
function Sidebar() {
  const { chats, setChats } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const handleInput = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    const debouncing = setTimeout(() => {
      console.log(search);
      if (search.length > 0) {
        let arr = chats.filter((chat) =>
          chat.name.toLowerCase().includes(search)
        );
        setChats([...arr]);
      } else {
        setChats(DirectMessage);
      }
    }, 1000);
    return () => clearTimeout(debouncing);
  }, [search]);
  // console.log(chats);
  return (
    <React.Fragment>
      <div className="input-group m-3">
        <input
          type="text"
          className="form-control"
          placeholder="Find or Start a conversation"
          style={{ backgroundColor: "black", color: "white" }}
          onChange={(e) => {
            handleInput(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="p-2">
        {Functionalities.map((item, index) => {
          return (
            <div key={index} className="Navlinks fs-6 border-top ">
              <NavLink to={item.path} className="links ">
                {item.icon} {item.title}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="p-2">
        <div style={{ color: "gray" }}>Direct Message</div>
        {chats.map((item, index) => {
          return (
            <div
              className="chat fs-6 border border-top border-secondary"
              key={index}
              style={{ color: item.active ? "white" : "grey" }}
            >
              {" "}
              <span style={{ color: "#ff66cc" }}>{item.icon}</span> {item.name}
              <div style={{ align: "right" }}>{item.member} members</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
