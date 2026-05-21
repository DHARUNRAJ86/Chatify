import {io} from 'socket.io-client'

let socket = null;

export const connectSocket = (userId)=>{
    socket = io(import.meta.env.MODE === 'development' ? 'http://localhost:5173':'/',{
        
    })
}