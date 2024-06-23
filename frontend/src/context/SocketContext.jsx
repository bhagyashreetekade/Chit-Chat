import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

const SocketContext = createContext();

//hook ,to consume the values we get from provider we use this hook
export const useSocketContext = ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider =({children}) =>{
    const [socket ,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io('http://localhost:5000',{
                //take the user id
                query:{
                    userId:authUser._id,
                }
            });
            setSocket(socket);

            //get online users
            //socket.on() is used to listen to the events ,can be used both on client and server side
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            });

            return ()=> socket.close();
        }
        //if not authenticated users
        else{
            //existing socket connection
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
