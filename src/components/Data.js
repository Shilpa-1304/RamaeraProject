import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
import { IoMdInfinite } from "react-icons/io";
import { GiThreeFriends } from "react-icons/gi";
export const Functionalities = [
  {
    title: "Friends",
    path: "/",
    icon: <GiThreeFriends />
  },
  {
    title: "Nitro",
    path: "/Nitro",
    icon: <IoMdInfinite />
  },
  {
    title: "Message Request",
    path: "/MessageRequest",
    icon: <BiMessageDots />
  }
];
export const DirectMessage = [
  {
    name: "Crypserve",
    member: "3",
    active: true, //online
    pending: false,
    blocked: false,
    icon: <FaUserFriends />
  },
  {
    name: "BeardedBro",
    member: "",
    active: true,
    pending: false,
    blocked: false,
    icon: <FaUser />
  },
  {
    name: "NFT",
    member: "6",
    active: true,
    blocked: false,
    pending: false,
    icon: <FaUserFriends />
  },
  {
    name: "Clinarix Support",
    member: "",
    active: false,
    pending: true,
    blocked: false,
    icon: <FaUser />
  },
  {
    name: "BLOCKCHAIN BOYS",
    member: "1",
    active: false,
    pending: false,
    blocked: false,
    icon: <FaUserFriends />
  },
  {
    name: "IMMY 8285",
    member: "4",
    active: false,
    pending: false,
    blocked: false,
    icon: <FaUserFriends />
  },
  {
    name: "Sad Clown",
    member: "5",
    active: false,
    pending: false,
    blocked: false,
    icon: <FaUserFriends />
  },
  {
    name: "Rockpals NFT",
    member: "2",
    active: false,
    pending: false,
    blocked: true,
    icon: <FaUserFriends />
  },
  {
    name: "Investment NFT",
    member: "4",
    active: false,
    pending: true,
    blocked: false,
    icon: <FaUserFriends />
  },
  {
    name: "Nick",
    member: "",
    active: true,
    pending: true,
    blocked: false,
    icon: <FaUser />
  },
  {
    name: "Sam",
    member: "",
    active: true,
    pending: false,
    blocked: false,
    icon: <FaUser />
  },
  {
    name: "John",
    member: "",
    active: false,
    pending: true,
    blocked: true,
    icon: <FaUser />
  },
  {
    name: "Stan",
    member: "",
    active: false,
    pending: false,
    blocked: false,
    icon: <FaUser />
  }
];
