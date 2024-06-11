import React from "react";
import homelogo from "../imgs/home.png";
import shortslogo from "../imgs/shorts.png";
import subs from "../imgs/subs.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  //early return
  let location = useLocation();
  return isMenuOpen ? (
    <div className=" fixed bg-white whitespace-nowrap overflow-hidden overflow-y-auto custom-scrollbar text-sm w-52">
      <div className="w-full h-14"></div>
      <ul className="border-0 border-b-2 py-3">
        <Link to="/">
          <li className="px-3 flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 mx-2 py-1">
            <img className="h-7" alt="homelogo" src={homelogo}></img>
            <div className="m-2 mx-6 font-semibold">Home</div>
          </li>
        </Link>
        <Link to="/shorts">
          <li className="px-3 flex items-center rounded-lg hover:bg-gray-100  mx-2 py-1">
            <img className="h-6" alt="homelogo" src={shortslogo}></img>
            <div className="m-2 mx-6 ">Shorts</div>
          </li>
        </Link>
        <li className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
          <img className="h-6" alt="homelogo" src={subs}></img>
          <div className="m-2 mx-6 ">Subscriptions</div>
        </li>
      </ul>
    </div>
  ) : location.pathname === "/watch" ? null : (
    <div className="fixed bg-white text-[0.6rem] p-2 w-20">
      <div className="w-full h-14"></div>

      <ul className=" text-center">
        <Link to="/">
          <li className=" p-1 py-4 rounded-lg hover:bg-gray-100 ">
            <img className="h-7  m-auto" alt="homelogo" src={homelogo}></img>
            <div className="">Home</div>
          </li>
        </Link>
        <Link to="/shorts">
          <li className="  p-1 py-4 rounded-lg hover:bg-gray-100 ">
            <img className="h-7 m-auto" alt="homelogo" src={shortslogo}></img>
            <div className="">Shorts</div>
          </li>
        </Link>

        <li className="  p-1 py-4 rounded-lg hover:bg-gray-100 ">
          <img className="h-7 m-auto" alt="homelogo" src={subs}></img>
          <div className="">Subscriptions</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
