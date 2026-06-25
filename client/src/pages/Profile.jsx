import {Camera,Loader2,Mail,User} from 'lucide-react'
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react';


const Profile = () => {
   
   const [authUser,isUpdatingProfile] = useSelector(state => state.auth);

   const [selectedImage,setSelectedImage] = useState(null);

   const [formData,setFormData] =({
       fullName:authUser?.fullName,
       email:authUser?.email,
       avatar:authUser?.avatar.url,
   })

   const dispatch = useDispatch();

   const handleImageUpload = (e)=>{
     const file = e.target.files[0];
     if(!file) return;

     const reader = new FileReader();
     reader.readAsDataURL(file);

     reader.onload = ()=>{
      const base64Image = reader.result;
      setSelectedImage(base64Image);
     }
   }
   return <></>
};

export default Profile;