import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {Loader} from 'lucide-react';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUser,setOnlineUsers} from './store/slices/authSlice.js';
import {connectSocket,disconnectSocket} from './lib/socket.js';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/skeletons/Navbar.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import {ToastContainer} from 'react-toastify';


const App =()=>{
    const{authUser,isCheckingAuth} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUser());
    },[dispatch])

    useEffect(()=>{
        if(authUser){
          const socket = connectSocket(authUser._id);
         socket.on('getOnlineUsers',(users)=>{
              dispatch(setOnlineUsers(users));
         })
          return()=> disconnectSocket();
        }
    },[authUser,dispatch]);

    if(isCheckingAuth && !authUser){
        return(
            <div className='flex items-center justify-center h-screen'>
                <Loader className='size-10 animate-spin'/>
            </div>
        )
    }

  return <>
     <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
            <Route path='/register' element={!authUser ? <Register /> : <Navigate to={'/'} />} />
            <Route path='/login' element={!authUser ? <Login /> : <Navigate to={'/'} />} />
            <Route path='/profile' element={authUser ? <Profile /> : <Navigate to={'/login'} />} />
        </Routes>
        <ToastContainer/>
     </Router>
  </>
}
export default App