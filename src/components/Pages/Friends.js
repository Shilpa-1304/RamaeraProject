import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { DataContext } from "../LandingPage";
import { DirectMessage } from "../Data";
export default function Friends() {
  const { chats, setChats, member, setMember } = useContext(DataContext);
  const [list, setList] = useState(member);
  const [person, setPerson] = useState({
    member: "",
    active: false,
    pending: false,
    blocked: false,
    icon: <FaUser />
  });
  const [search, setSearch] = useState("");
  const Buttons = ["Online", "All", "Pending", "Blocked"];
  console.log(list);
  console.log(member);
  useEffect(() => {
    setList(member);
  }, [member]);
  useEffect(() => {
    const debouncing = setTimeout(() => {
      if (search.length > 0) {
        let arr = list.filter((chat) =>
          chat.name.toLowerCase().includes(search)
        );
        setList([...arr]);
      } else {
        setList(member);
      }
      // console.log(search);
    }, 1000);
    return () => clearTimeout(debouncing);
  }, [search]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // let arr = [...list];
    // arr.push(person);
    setMember([...list, person]);
    // DirectMessage.push(person);
  };
  // console.log(list);
  const handleClick = (btnClicked) => {
    let buttonClicked = btnClicked.Button;
    console.log(buttonClicked);
    switch (buttonClicked) {
      case "Online": {
        console.log("online clicked");
        let messagesArr = [...DirectMessage];
        let arr = messagesArr.filter((chat) => chat.active === true);
        setList([...arr]);
        break;
      }
      case "Pending": {
        console.log("Pending clicked");
        let messagesArr = [...DirectMessage];
        let arr = messagesArr.filter((chat) => chat.pending === true);
        setList([...arr]);
        break;
      }
      case "Blocked": {
        let messagesArr = [...DirectMessage];
        console.log("Blocked clicked");
        let arr = messagesArr.filter((chat) => chat.blocked === true);
        setList([...arr]);
        break;
      }
      default: {
        setList(member);
        break;
      }
    }
  };
  return (
    <React.Fragment>
      <section>
        <nav
          class="navbar navbar-light"
          style={{
            backgroundColor: "#000000",
            border: "1px solid black",
            borderRadius: "10px"
          }}
        >
          <div class="container-fluid">
            <span className="text-light fs-5 fw-bolder">Friends</span>
            {Buttons.map((Button) => {
              return (
                <button
                  onClick={() => {
                    handleClick({ Button });
                  }}
                  className={
                    Button === "Online"
                      ? "btn btn-dark fs-5 active"
                      : "btn btn-dark fs-5"
                  }
                  aria-current="page"
                >
                  {Button}
                </button>
              );
            })}
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              {" "}
              Add Friend
            </button>
          </div>
        </nav>
        <br />
        <form class="d-flex">
          <input
            class="form-control me-2 bg-dark text-light"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />{" "}
          <br />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="container">
          {list.map((item, index) => {
            return (
              <div
                className="chat d-flex justify-content-between"
                key={index}
                style={{ color: item.active ? "white" : "grey" }}
              >
                <span>
                  <span style={{ color: "#ff66cc" }}>{item.icon} </span>
                  {item.name}
                </span>{" "}
                <span>
                  <AiFillMessage style={{ color: "#66ccff" }} />
                  <FiMoreVertical style={{ color: "#66ccff" }} />
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="staticBackdropLabel"
                style={{ color: "black" }}
              >
                Add Detail
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="" style={{ color: "black" }}>
              <div className="modal-body d-flex justify-content-evenly">
                <label>Full Name: </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Name: "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <br />
              <div className="modal-body d-flex justify-content-evenly">
                <label>Contact No: </label>
                <input
                  type="Number"
                  name="ContactNo"
                  required
                  placeholder="Enter Contact Number: "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
