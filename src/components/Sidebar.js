import React from "react";
import homelogo from "../imgs/home.png";
import shortslogo from "../imgs/shorts.png";
import subs from "../imgs/subs.png";
import library from "../imgs/library.png";
import history from "../imgs/history.png";
import trending from "../imgs/trending.png";
import shopping from "../imgs/shop.png";
import music from "../imgs/music.png";
import films from "../imgs/films.png";
import live from "../imgs/live.png";
import gaming from "../imgs/gaming.png";
import news from "../imgs/news.png";
import sport from "../imgs/sport.png";
import learn from "../imgs/learn.png";
import fashion from "../imgs/fashion.png";
import settings from "../imgs/settings.png"
import feedback from "../imgs/feedback.png"
import report from "../imgs/report.png"
import help from "../imgs/help.png"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const SideButton = ({ name, logo }) => (
  <div className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
    <img className="h-6" alt="homelogo" src={logo}></img>
    <div className="m-2 mx-6 ">{name}</div>
  </div>
);

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isOpen);
  const exploreList = [
    { name: "Trending", logo: trending},
    { name: "Shopping", logo: shopping},
    { name: "Music", logo: music},
    { name: "Films", logo: films},
    { name: "Live", logo: live},
    { name: "Gaming", logo: gaming},
    { name: "News", logo: news},
    { name: "Sport", logo: sport},
    { name: "Shopping", logo: shopping},
    { name: "Learning", logo: learn},
    { name: "Fashion and Beauty", logo: fashion},
  ];
  const settingsList = [
    { name: "Settings", logo: settings},
    { name: "Report History", logo: report},
    { name: "Help", logo: help},
    { name: "Send Feedback", logo: feedback},
    ];
    //early return
  let location = useLocation();
  return isMenuOpen ? (
        <div className="whitespace-nowrap overflow-hidden overflow-y-auto h-screen custom-scrollbar text-sm">
          <ul className="border-0 border-b-2 py-3">
            <Link to="/">
            <li className="px-3 flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 mx-2 py-1">
              <img className="h-7" alt="homelogo" src={homelogo}></img>
              <div className="m-2 mx-6 font-semibold">Home</div>
            </li>
            </Link>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100  mx-2 py-1">
              <img className="h-6" alt="homelogo" src={shortslogo}></img>
              <div className="m-2 mx-6 ">Shorts</div>
            </li>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
              <img className="h-6" alt="homelogo" src={subs}></img>
              <div className="m-2 mx-6 ">Subscriptions</div>
            </li>
          </ul>
          <div className="border-0 border-b-2 py-3">
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
              <img className="h-6" alt="homelogo" src={library}></img>
              <div className="m-2 mx-6 ">Library</div>
            </li>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
              <img className="h-6" alt="homelogo" src={history}></img>
              <div className="m-2 mx-6 ">History</div>
            </li>
          </div>
          <div className="border-0 border-b-2 py-3">
            <div className="px-3 flex items-center rounded-lg hover:bg-gray-100 mx-2 py-1">
              <div className="m-1">Explore</div>
            </div>
            {exploreList.map((item, index) => {
              return <SideButton key={index} name={item.name} logo={item.logo} />;
            })}
          </div>
          <div className="border-0 border-b-2 py-4">
            {settingsList.map((item, index) => {
              return <SideButton key={index} name={item.name} logo={item.logo} />;
            })}
          </div>
          <div className="border-blue-200 border-2 py-4 mb-2">
            About Press Copyright Contact Us Creators
          </div>
        </div>
  ):(
    (location.pathname==="/watch")?(null):(
    <div className=" text-xs">
      <ul className=" text-center">
            <Link to="/"><li className=" p-1 py-4 rounded-lg hover:bg-gray-100 ">
              <img className="h-7  m-auto" alt="homelogo" src={homelogo}></img>
              <div className="">Home</div>
            </li>
            </Link>
            <li className="  p-1 py-4 rounded-lg hover:bg-gray-100 ">
              <img className="h-7 m-auto" alt="homelogo" src={shortslogo}></img>
              <div className="">Shorts</div>
            </li>
            <li className="  p-1 py-4 rounded-lg hover:bg-gray-100 ">
              <img className="h-7 m-auto" alt="homelogo" src={subs}></img>
              <div className="">Subscriptions</div>
            </li>
          </ul>
    </div>)
  );
};

export default Sidebar;
