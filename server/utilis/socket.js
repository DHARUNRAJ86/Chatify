import {Server} from 'socket.io'

const userSocketMap = {};

let io;

export function initSocket(server){
    io = new Server(server,{
        cors:{
            origin:[process.env.FRONTEND_URL],
        }
    })
    io.on("connection",(socket)=>{
        console.log("A user connected to the server",socket.id)
    })
}