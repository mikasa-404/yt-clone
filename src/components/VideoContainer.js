import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  const isMenuOpen = useSelector(store=>store.app.isOpen);


  return videos.length===0? null:(
    <div className={'m-3 overflow-y-scroll overflow-hidden h-screen p-auto ' + (isMenuOpen ? 'grid grid-cols-3': ' grid grid-cols-4')}>
     {/* <AdVideoCard info={videos[0]}/> */}
     { videos.map((vid)=>(
     <Link key={vid.id} to={"/watch?v="+vid.id}>
     <VideoCard  info={vid}/>
     </Link>))}

    </div>
  );
};

export default VideoContainer;
