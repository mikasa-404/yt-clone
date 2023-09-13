import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useeffect");
    dispatch(closeMenu());
  }, []);
  // const isMenuOpen = useSelector(store=>store.app.isOpen);    
  return (
    <div className="w-full watch page">
      <div className="vid-container m-5 mx-24">
      <iframe 
      className='rounded-xl'
      width="890" 
      height="500.8" 
      src={"https://www.youtube.com/embed/"+params.get("v") }
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
      
      </div>
  )
}

export default WatchPage;