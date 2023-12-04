import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


const Comment = ({data}) => {
    const{name, text, replies}= data;
  return (
    <div className='flex my-4'>
        <FaUserCircle size={30} color='green'/>
        <div className='flex flex-col mx-2 '>
            <div className='font-semibold'>@{name}</div>
            <div>{text}</div>
            <div className='flex my-2'>
                <BiLike size={20}/>
                <BiDislike size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Comment