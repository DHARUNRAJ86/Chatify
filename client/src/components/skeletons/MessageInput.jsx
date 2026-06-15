import {Image,Send,X,Video} from 'lucide-react';
import {useState,useRef,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import { getSocket } from '../socket';

const MessageInput = () => {
  const [text,setText] = useState("");
  const[mediaPreview,setMediaPreview] = useState(null);
  const[media,setMedia] =useState(null);
  const[mediaType,setMediaType] = useState("");
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const {selectedUser} =useSelector((state)=> state.chat);
   
  const handleChange =(e)=>{
    const file =e.target.files[0];

    if(!file) return;
    setMedia(file);
    const type = file.type;
    if(type.startsWith("image/")){
      setMediaType("image");
      const reader = new FileReader();
      reader.onload = ()=>{
        setMediaPreview(reader.result);
      }
      reader.readAsDataURL(file);
    }else if(type.startsWith("video/")){
      setMediaType("video");
      const videoUrl = URL.createObjectURL(file);
      setMediaPreview(videoUrl);
    }else{
        toast.error("Please select an image or video file.");
        setMedia(null);
        setMediaPreview(null);
        setMediaType("");
        return;
    }
  }

  const removeMedia = ()=>{
    setMedia(null);
    setMediaPreview(null);
    setMediaType("");
    if(fileInputRef.current) fileInputRef.current.value ="";
  };

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    if(!text.trim() && !media) return;

    const data = new FormData();
    data.append("text",text.trim());
    data.append("media",media);

    // dispatch(sendMessage(data))
    //Reset All

    setText("");
    setMedia(null);
    setMediaPreview(null);
    setMediaType("");
    if(fileInputRef.current) fileInputRef.current.value ="";
  };
  useEffect(()=>{
     const socket = getSocket();

     if(!socket) return;

     const handleNewMessage = (newMessage)=>{
       if(newMessage.senderId === selectedUser._id || newMessage.receiverId === selectedUser._id){
        dispatch({type:"chat/pushNewMessage",payload:newMessage});
       }
     };
     socket.on("newMessage",handleNewMessage);
     return ()=> socket.off("newMessage",handleNewMessage);
  },[selectedUser._id])

  return <div>Input</div>;
};

export default MessageInput;