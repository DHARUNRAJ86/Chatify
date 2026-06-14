import {Image,Send,X,Video} from 'lucide-react';
import {useState,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';



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
    if(type.startWith("image/")){
      setMediaType("image");
      const reader = new FileReader();
      reader.onload = ()=>{
        setMediaPreview(reader.result);
      }
      reader.readAsDataURL(file);
    }else if(type.startWith("video/")){
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

  const handleSendMessage = async()=>{
    e.preventDefault();
    if(!text.trim() && !media) return;

    const data = new FormData();
    data.append("text",text.trim());
    data.append("media",media);
  }

  return <div>Input</div>;
};

export default MessageInput;