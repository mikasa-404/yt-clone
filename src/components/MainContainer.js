import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);
  return (
    <div className="flex-1 flex no-scrollbar overflow-x-hidden">
      <div className={`${isMenuOpen ? "w-52" : "w-20"} h-full`}></div>
      <div className="flex-1 flex flex-col overflow-x-hidden px-4">
        <div className="w-full h-24"></div>

        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
