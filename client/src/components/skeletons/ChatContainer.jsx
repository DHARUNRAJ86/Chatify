import {useSelector,useDispatch} from 'react-redux';
import {useRef,useEffect} from 'react';
import {getMessages} from '../store/slices/chatSlice.js'
import {getSocket} from '../lib/socket.js'
import MessageInput from './MessageInput.jsx';
import ChatHeader from './ChatHeader.jsx';
import MessageSkeleton from './MessageSkeleton'


const ChatContainer = () => {
    const {messages,isMessagesLoading,selectedUser} = useSelector(state =>state.chat);
    const {authUser} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const messageEndRef = useRef(null);

    useEffect(()=>{
    if(!selectedUser?._id) return;

    dispatch(getMessages(selectedUser._id));

    const socket = getSocket();
    if(!socket) return;

},[selectedUser?._id]);

    useEffect(()=>{
        if(messageEndRef.current && messages){
            messageEndRef.current.scrollIntoView({behavior:"smooth"})
        }
    },[messages])

    function formatMessageTime (date){
        return new Date(date).toLocaleTimeString("en-US",{
            hour:"2-digit",
            minute:"2-digit",
            hour12:false,
        });
    }

    

    if(isMessagesLoading){
        return (
            <div className='flex-1 flex flex-col overflow-auto'>
                  <ChatHeader/>
                  <MessageSkeleton/>
                  <MessageInput/>
            </div>
    )
    }
    return <></>
};

export default ChatContainer;