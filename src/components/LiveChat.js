import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateMessage, generateRandomNames } from '../utils/helperMessages';
import { LuSendHorizonal } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

import { useState } from 'react';


const LiveChat = () => {
    const [messageText, setMessageText]=useState("");
    const dispatch=useDispatch();
    const livemessages= useSelector(store=>store.chat.chatMessages);
    useEffect(() => {
        const i = setInterval(() => {
            //api polling //dispatch action
            dispatch(addMessage({
                name:generateRandomNames(),
                message: generateMessage(),
            }))
        }, 1500);
        return () => clearInterval(i);
    }, []);
    const sendMessage=()=>{
        dispatch(addMessage({
            name:"User",
            message: messageText,
        }))
        setMessageText("")
    }
    return (
        <div className='h-[550px] border border-gray-200 flex flex-col rounded-lg'>
            <div className='flex justify-between items-center border-b m-0 p-2'>
                <span>
                    Live Chat
                </span>
                <BsThreeDotsVertical />
            </div>
            <div className='p-2 overflow-y-scroll border h-full flex flex-col-reverse'>
                {livemessages.map((m, index)=><ChatMessage key={index} name={m.name} message={m.message} />)}
            </div>

            <form className='flex justify-between items-center' onSubmit={(e)=>{
                e.preventDefault();
                sendMessage();

            }}>
            <span className='ml-4'><FaUserCircle color='blue'/></span>
            <input type='text' className='rounded-lg w-full ml-2 p-2' placeholder='Chat...' value={messageText}
            onChange={(e)=>{
                setMessageText(e.target.value);
            }}/>
            <button className='p-2 hover:bg-slate-100 active:bg-slate-300 rounded-lg'>
                <LuSendHorizonal />
            </button>
            </form>
            
        
        </div>
    )
}

export default LiveChat