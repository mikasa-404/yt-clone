import React from 'react'
import { useEffect , useState} from 'react';
import { VIDEO_API } from '../utils/constants';

const WatchPageDetails = (videoId) => {
    // const [videoDetails,setvideoDetails]= useState(null);

    useEffect(()=>{
        fetchData("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UNo0TG9LwwI&key=AIzaSyDDaGOJ_wbfh7tDG59lA8mLnK0YPE9KKow");
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(VIDEO_API);
        console.log(data);
    }
    
  return (
    <div>WatchPageDetails</div>
  )
}

export default WatchPageDetails;