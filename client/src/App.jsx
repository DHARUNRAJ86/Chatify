import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {Loader} from 'lucide-react';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUser,setOnlineUsers} from './store/slices/authSlice.js';
import {connectSocket} from './lib/socket.js';

const App =()=>{
    const{authUser,isCheckingAuth} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUser());
    },[getUser])

    useEffect(()=>{
        if(authUser){
          const socket = connectSocket(authUser._id);
         socket.on('getOnlineUsers',(users)=>{
              dispatch(setOnlineUsers(users));
         })
        }
    },[authUser])

  return <></>
}
export default App