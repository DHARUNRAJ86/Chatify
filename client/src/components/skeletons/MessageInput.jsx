import {Image,Send,X,Video} from 'lucide-react';
import {useState} from 'react';
const MessageInput = () => {
  const [text,setText] = useState("");
  const[mediaPreview,setMediaPreview] = useState(null);
  const[media,setMedia] =useState(null);
  const[mediaType,setMediaType] = useState("");
  return <div>Input</div>;
};

export default MessageInput;