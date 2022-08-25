import { Avatar } from '@mui/material';
// import React, {useEffect, useState} from 'react'
import './SidebarChat.css'

function SidebarChat({name}) {
//   const [seed, setSeed] = useState("");

//   useEffect(() => {
//     setSeed(Math.floor(Math.random() * 5000))
//   }, [])

  // const createChat = () => {
  //   const roomName = prompt("please enter name for chat");

  //   if(roomName) {

  //   }
  // };
  
  return (
    <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
               <h2>Room Name</h2> 
               <p>This is the last message</p>
            </div>
            <div className="sidebarChat__time">
              05:22 PM
            </div>
    </div>
  ) 
  }

export default SidebarChat