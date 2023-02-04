import React from "react";
import { Routes, Route } from "react-router-dom";
import Friends from "./Pages/Friends";
import Nitro from "./Pages/Nitro";
import MessageRequest from "./Pages/MessageReq";
export default function Navpage() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Friends />} />
          <Route path="/Nitro" element={<Nitro />} />
          <Route path="/MessageRequest" element={<MessageRequest />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}
