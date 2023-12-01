import React from 'react'
import { useEffect } from 'react';
import { VIDEO_API } from '../utils/constants';
import { useState } from 'react';
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"
import { FiMoreHorizontal } from "react-icons/fi"
import ChannelDetails from './ChannelDetails';
import { abbreviateNumber } from 'js-abbreviation-number';
import VideoCommentContainer from './VideoCommentContainer';



const WatchPageDetails = ({ videoId }) => {
  const [videoDetails, setvideoDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, [videoId])
  const { channelId, channelTitle, description, tags, title, publishedAt } = videoDetails?.snippet || {};
  const { commentCount, likeCount, viewCount } = videoDetails?.statistics || {};

  const fetchData = async () => {
    const data = await fetch(VIDEO_API + "&id=" + videoId);
    const json = await data.json();
    console.log(VIDEO_API + "&id=" + videoId)
    setvideoDetails(json?.items[0]);
    console.log(videoDetails);
  }


  return videoDetails == null ? <div></div> : (
    <div className='flex flex-col w-full'>
      {/* Video Title */}
      <div className='my-2 font-semibold text-lg'>{title}</div>

      {/* Channel Details And lIkes */}
      <div className='flex items-center my-2 justify-between'>
        <div className='flex items-center '>
          <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
          <div><button className='mx-4 p-2 px-4 bg-black text-white bg-white  rounded-full'>Subscribe</button></div>
        </div>
        {/* Likes and DisLikes */}
        <div className='flex items-center max-sm:hidden'>
          <div className='m-2  flex items-center bg-gray-100  p-2 px-6 rounded-full  border-white'>
            <BiLike className='text-xl mr-1' />
            <p className='mx-1 text-sm'>{abbreviateNumber(likeCount)}</p>
            <p className='mx-1'>|</p>
            <BiDislike className='text-xl ml-1' />
          </div>

          {/* Share Button */}
          <div className='m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between   border-white '>
            <PiShareFatThin className='text-xl mr-1' />
            <p className='font-medium ml-1'>Share</p>
          </div>

          {/* More */}
          <div className='bg-gray-100 p-2 rounded-full ml-2  border-white hidden md:block '>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <div className='p-2'>
                <VideoCommentContainer videoId={videoId} commentCount={commentCount}/>
          </div>
    </div>
  )
}

export default WatchPageDetails;