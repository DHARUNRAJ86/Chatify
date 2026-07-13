import {Server} from 'socket.io'

const userSocketMap = {};

let io;

export function initSocket(server){
    io = new Server(server,{
        cors:{
            origin:[process.env.FRONTEND_URL, "http://localhost:5173", "http://localhost:5174"],
        }
    })
    io.on("connection",(socket)=>{
        console.log("A user connected to the server",socket.id)

        const userId = socket.handshake.query.userId;
        if(userId){
            userSocketMap[userId] = socket.id;
        }
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
        socket.on("disconnect",()=>{
            console.log("A user disconnected from the server",socket.id);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers",Object.keys(userSocketMap));
        })
    })
}

export function getReceiverSocketId(receiverId){
    return userSocketMap[receiverId];
}

export {io};