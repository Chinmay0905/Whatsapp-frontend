import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    // const [rooms, setRooms] = useState([]); 


    // useEffect(() => {
    //   db.collection("rooms").onSnapshot((snapshot) =>  
    //       setRooms(
    //           snapshot.docs.map((doc) => ({
    //               id: doc.id,
    //               data: doc.data(),
    //           }))
    //       ) 
    //   )
    // }, [])


    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                {/* <SidebarChat addNeWChat /> */}
                {/* {rooms.map((room) => (
                    <SidebarChat key = {room.id} id={room.id} name = {room.data.name} />
                ))} */}

            </div>
        </div>
    )
}

export default Sidebar