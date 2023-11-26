import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import WatchPageDetails from './WatchPageDetails';
const WatchPage = () => {

  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const vidId=params.get("v");

  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  // const isMenuOpen = useSelector(store=>store.app.isOpen);    
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