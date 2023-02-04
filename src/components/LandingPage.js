//Landing page
import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";
import { Functionalities, DirectMessage } from "./Data";
export const DataContext = createContext();

function LandingPage() {
  const [chats, setChats] = useState(DirectMessage);
  const [member, setMember] = useState(DirectMessage);
  return (
    <DataContext.Provider value={{ chats, setChats, member, setMember }}>
      <React.Fragment>
        {/* sidebar section */}

        <div className="row border m-1 ">
          <div className="col-sm-3 bg-dark text-light">
            <Sidebar />
          </div>

          <div className="col-sm-9 bg-dark text-light ">
            <Navpage />
          </div>
        </div>
      </React.Fragment>
    </DataContext.Provider>
  );
}

export default LandingPage;
