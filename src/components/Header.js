import React from "react";
import ytlogo from "../imgs/youtube_logo.jpg";
import hamButton from "../imgs/png-transparent-hamburger-button-computer-icons-menu-ganesha-angle-white-food.png";
import searchButton from "../imgs/search.png"
import userIcon from "../imgs/user.png"

const Header = () => {
  return (
    <div className="grid grid-flow-col border-2 border-black h-14">
      <div className="1 flex m-1 col-span-2"> 
          <img className="h-8 m-2 p-1 " src={hamButton} alt="hambutton"></img>
          <img className="h-8 m-2" alt="logo" src={ytlogo}></img>
      </div>
      <div className=" flex 2 m-1 col-span-6 items-center justify-center">
        <input className="w-3/5 border-slate-300 border rounded-l-2xl m-0 mr-0 text-base h-9 px-4 focus:outline-none focus:shadow-outline focus:border-blue-700" placeholder="Search"></input>
        <button className="border-slate-300 border rounded-r-2xl ml-0 p-2 h-9 hover:bg-gray-100">
          <img  className=" h-5 pl-3 pr-4" src={searchButton} alt="searchbtn"></img>
        </button>
      </div>
      <div className="3 m-1  col-span-2">
        <img className="h-8 m-2 float-right mr-5 " src={userIcon} alt="userLogo"></img>
      </div>
    </div>
  );
};

export default Header;
