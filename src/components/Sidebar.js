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




const SideButton = ({ name, logo }) => (
  <div className="px-3 flex items-center rounded-lg hover:bg-gray-100">
    {console.log(name)}
    <img className="h-6" alt="homelogo" src={logo}></img>
    <div className="m-2 mx-6 ">{name}</div>
  </div>
);

const Sidebar = () => {
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
  return (
        <div className="whitespace-nowrap overflow-hidden overflow-y-scroll w-1/6 h-screen">
          <ul className="border-0 border-b-2 py-3">
            <li className="px-3 flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 ">
              <img className="h-7" alt="homelogo" src={homelogo}></img>
              <div className="m-2 mx-6 font-semibold">Home</div>
            </li>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100 ">
              <img className="h-6" alt="homelogo" src={shortslogo}></img>
              <div className="m-2 mx-6 ">Shorts</div>
            </li>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100">
              <img className="h-6" alt="homelogo" src={subs}></img>
              <div className="m-2 mx-6 ">Subscriptions</div>
            </li>
          </ul>
          <div className="border-0 border-b-2 py-3">
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100">
              <img className="h-6" alt="homelogo" src={library}></img>
              <div className="m-2 mx-6 ">Library</div>
            </li>
            <li className="px-3 flex items-center rounded-lg hover:bg-gray-100">
              <img className="h-6" alt="homelogo" src={history}></img>
              <div className="m-2 mx-6 ">History</div>
            </li>
          </div>
          <div className="border-0 border-b-2 py-3">
            <div className="px-3 flex items-center rounded-lg hover:bg-gray-100">
              <div className="m-1">Explore</div>
            </div>
            {exploreList.map((item) => {
              return <SideButton name={item.name} logo={item.logo} />;
            })}
          </div>
          <div className="border-0 border-b-2 py-4">
            {settingsList.map((item) => {
              return <SideButton name={item.name} logo={item.logo} />;
            })}
          </div>
          <div className="border-blue-200 border-2 py-4 mb-2">
            About Press Copyright Contact Us Creators
          </div>
        </div>
  );
};

export default Sidebar;
