import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.app.isOpen);
  return (
    
    <div className='w-full'>
      {/* <ButtonList/> */}
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;