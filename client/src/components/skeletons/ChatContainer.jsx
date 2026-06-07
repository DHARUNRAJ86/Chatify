import {useSelector,useDispatch} from 'react-redux';
import {useRef} from 'react';
const ChatContainer = () => {
    const {messages,isMessagesLoading,selectedUser} = useSelector(state =>state.chat);
    const {authUser} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const messageEndRef = useRef(null);
    return <></>
};

export default ChatContainer;