import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchPageDetails from "./WatchPageDetails";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const vidId = params.get("v");
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-1 flex mx-20">
      <div className={`${isMenuOpen ? "w-52" : ""} h-full`}></div>
      <div className="w-full flex flex-col">
        <div className="w-full h-24 "></div>
        <div className="flex">
          <div className=" m-2 w-4/6 ">
            {/* video container */}
            <div className="vid-container h-[500px]">
              <iframe
                className="rounded-xl w-full h-full"
                src={
                  "https://www.youtube.com/embed/" +
                  vidId +
                  "?autoplay=1&mute=0"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* watchpagedetails */}
            <div className="my-3">
              <WatchPageDetails videoId={vidId} />
            </div>

            {/* comments */}
            <div className="">
              <CommentContainer />
            </div>
          </div>
          <div className="m-2 w-2/6">
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
