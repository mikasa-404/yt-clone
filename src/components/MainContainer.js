import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);
  const [curId, setId] = useState(0);
  console.log(curId);
  return (
    <div className="flex-1 flex no-scrollbar overflow-x-hidden relative">
      <div className={`${isMenuOpen ? "w-52" : "w-20"} h-full`}></div>
      <div className="flex-1 flex flex-col overflow-x-hidden px-4">
        <div className="w-full h-24 "></div>

        <ButtonList setId={setId} />
        <VideoContainer categoryId={curId} />
      </div>
    </div>
  );
};

export default MainContainer;
