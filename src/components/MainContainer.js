import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.app.isOpen);
  return (
    
    <div className={isMenuOpen? 'w-5/6': 'w-[calc(100%-5rem)]'}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;