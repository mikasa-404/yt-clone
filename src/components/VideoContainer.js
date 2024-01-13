import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  const [scroll,setScroll]=useState(false);
  useEffect(() => {
    fetchVideos();
  }, [scroll]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const datajson = await data.json();
    const newData=videos.concat(datajson?.items);
    setVideos(newData);
    setScroll(false);
  };

  const isMenuOpen = useSelector(store=>store.app.isOpen);
  const handleScroll = async () => {
    try{
  
      if(window.innerHeight+ document.documentElement.scrollTop+2>=document.documentElement.scrollHeight){
        setScroll(true);
      }
    }
    catch(error){
      console.log(error)
    }
    
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return videos.length===0? (<Shimmer/>):(
    <div className={'m-3 h-screen p-auto ' + (isMenuOpen ? 'grid grid-cols-3': ' grid grid-cols-4')}>
     {/* <AdVideoCard info={videos[0]}/> */}
     { videos.map((vid, index)=>(
     <Link key={vid?.id+index} to={"/watch?v="+vid.id}>
     <VideoCard  info={vid}/>
     </Link>))}

    </div>
  );
};

export default VideoContainer;
