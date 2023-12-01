import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import WatchPageDetails from './WatchPageDetails';
import { VIDEO_API } from '../utils/constants';

const WatchPage = () => {
  // const [data, setData]=useState([]);
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const vidId=params.get("v");

  // const getVideoData = async ()=>{
  //   const resp= await fetch( VIDEO_API+vidId );
  //   const json= await resp.json();
  //   setData(json);
  //   console.log(VIDEO_API+vidId);

  // }
  // useEffect(()=>{
  //   getVideoData();
  // },[]);
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (

    <div className="w-full watch page">
      <div className="vid-container m-5 mx-24">
      <iframe 
      className='rounded-xl'
      width="890" 
      height="500.8" 
      src={"https://www.youtube.com/embed/"+vidId+"?autoplay=1&mute=0" }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
      <div className="m-5 mx-24">
        <WatchPageDetails videoId={vidId}/>
      </div>
      
      </div>
  )
}

export default WatchPage;