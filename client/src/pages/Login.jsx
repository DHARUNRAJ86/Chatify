import {Eye,EyeOff,Loader2,Lock,Mail,MessageSquare} from 'lucide-react'
import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email :"",
    password:""
  })

  const {isLoggingIn} = useSelector(state=>state.auth);

  const dispatch = useDispatch();
  const handleSubmit =(e)=>{
      e.preventDefault();
      //dispatch(login(formData))
  }
  return <>
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white'>
      {/* Left Side - Form */}
      <div className='flex flex-col justify-center items-center px-6 py-12'>
        <div className='w-full max-w-md'>
           {/*Logo and Heading */}
           <div className='flex flex-col items-center text-center mb-10'>
              <div className='bg-blue-100 p-3 rounded-lg'>
                <MessageSquare className='text-blue-600 w-6 h-6' />
              </div>
           </div>
        </div>
      </div>
    </div>
  </>
    
};

export default Login;