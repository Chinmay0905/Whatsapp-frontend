import React, {useState, useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'; 
import axios from './axios';

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('1860540df384d6065145', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

console.log(messages);

  return (
    <div className="app">
      <header></header>x
      <div className="app__body">
     <Sidebar />
     <Chat messages={messages} /> 
     </div>
    </div>
  );
}

export default App;
