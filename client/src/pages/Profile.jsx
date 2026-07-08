import {Camera,Loader2,Mail,User} from 'lucide-react'
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react';
import { updateProfile } from "../store/slices/authSlice";

const Profile = () => {
   
   const {authUser,isUpdatingProfile} = useSelector(state => state.auth);

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
                className='w-32 h-32 rounded-full object-cover object-top border-4 border-gray-200'
                />
                <label htmlFor="avatar-upload" className={`absolute bottom-0 right-0 bg-gray-800 hover:scale-105
                  p-2 rounded-full cursor-pointer transition-all duration-200 ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none":''
                  }`}>
                    <Camera className='w-5 h-5 text-white'/>
                    <input type='file' id='avatar-upload' className='hidden' accept='image/*' onChange={handleImageUpload}
                    disable={isUpdatingProfile}
                    />
                  </label>
              </div>
              <p className='text-sm text-gray-400'>
                {
                  isUpdatingProfile ? "Uploading..." :"Click the camera icon to upload your photo."
                }
              </p>
            </div>
               {/* User Information */}
                 <div className='space-y-6'>
                    <div className='space-y-1.5'>
                       <div className='text-sm text-gray-500 flex items-center gap-2'>
                        <User className='w-4 h-4'/>Full Name
                       </div>
                       <input type='text' value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} 
                       className='px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-300 text-gray-800 w-full focus:outline-none'/>
                    </div>
                    
                    <div className='space-y-1.5'>
                       <div className='text-sm text-gray-500 flex items-center gap-2'>
                        <Mail className='w-4 h-4'/>Email Address
                       </div>
                       <input type='email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} 
                       className='px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-300 text-gray-800 w-full focus:outline-none'/>
                    </div>
                 </div>

                 {/* Update Profile Button */}
                 <button></button>
         </div>
       </div>
     </div>
   
   </>
};

export default Profile;