import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
// import VideoCard from './VideoCard';
// import { useState } from "react";

const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const datajson = await data.json();
    setVideos(datajson?.items);
  };

  return videos.length===0? null:(
    <div className="flex m-3 flex-wrap overflow-y-scroll overflow-hidden h-screen custom-scrollbar">
     { videos.map((vid)=><VideoCard info={vid}/>)}

    </div>
  );
};

export default VideoContainer;
