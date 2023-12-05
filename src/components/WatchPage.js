import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import WatchPageDetails from './WatchPageDetails';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const vidId=params.get("v");

  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <div className="w-full watch page">
      <div className='m-5 mx-24'>
      {/* video container */}
      <div className="vid-container">
      <iframe 
      className='rounded-xl'
      width="890" 
      height="500.8" 
      src={"https://www.youtube.com/embed/"+vidId+"?autoplay=1&mute=0" }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>

      {/* watchpagedetails */}
      <div className="my-3">
        <WatchPageDetails videoId={vidId}/>
      </div>
      
      {/* comments */}
      <div className="">
        <CommentContainer/>
      </div>
      </div>
      </div>
  )
}

export default WatchPage;