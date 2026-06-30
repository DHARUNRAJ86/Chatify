import {Camera,Loader2,Mail,User} from 'lucide-react'
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react';


const Profile = () => {
   
   const [authUser,isUpdatingProfile] = useSelector(state => state.auth);

   const [selectedImage,setSelectedImage] = useState(null);

   const [formData,setFormData] =useState({
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
      setFormData({...formData,avatar:file});
     }
   }
   const updateProfile = ()=>{
      const data = new FormData();
      data.append("fullName",formData.fullName)
      data.append("email",formData.email)
      data.append("avatar",formData.avatar)
      dispatch(updateProfile(data));
   }
   return <>
     <div className='min-h-screen pt-20 bg-gray-50'>
       <div className='max-w-2xl mx-auto p-4 py-8'>
         <div className='bg-white rounded-xl shadow-md p-6 space-y-8'>
            <div className='text-center'>
               <h1 className='text-2xl font-semibold text-gray-800'>Profile</h1>
               <p className='mt-2 text-gray-500'>Your Profile information</p>
            </div>
            {/*Avatar Upload */}
            <div className='flex flex-col items-center gap-4'>
              <div className='relative'>
                <img src={selectedImage || formData.avatar || "/avatar-holder.avif"} alt="/avatar-holder.avif"
                className='w-32 h-32 rounded-full object-cover'
                />
              </div>
            </div>
         </div>
       </div>
     </div>
   
   </>
};

export default Profile;