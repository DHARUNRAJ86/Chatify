import {Image,Send,X,Video} from 'lucide-react';
import {useState} from 'react';
import {useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';




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
    }
  }
  return <div>Input</div>;
};

export default MessageInput;