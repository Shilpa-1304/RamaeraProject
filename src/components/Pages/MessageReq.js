import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
export default function MessageReq() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/users");
      setData(res.data.users);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <section>
        {
          <div className="container">
            <h4>Message Request</h4>
            {data.map((item, index) => {
              return (
                <div
                  className="chat d-flex border-top border-secondary justify-content-between align-items-center"
                  key={index}
                >
                  <span>
                    <span className="">
                      <img
                        className=""
                        alt="Load Error"
                        height="10%"
                        width="10%"
                        src={item.image}
                      />{" "}
                    </span>
                    <span className="fs-6">
                      {item.firstName} {item.lastname}
                    </span>
                  </span>{" "}
                  <span>
                    <AiFillMessage style={{ color: "#66ccff" }} />

                    <FiMoreVertical style={{ color: "#66ccff" }} />
                  </span>
                </div>
              );
            })}
          </div>
        }
      </section>
    </React.Fragment>
  );
}
