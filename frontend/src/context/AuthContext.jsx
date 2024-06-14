import { createContext, useContext, useState } from "react";


export const AuthContext =  createContext();

//hook ,to consume the values we get from auth provider we use this hook
export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

//now this values will be used by whole application
export const AuthContextProvider = ({children}) =>{
    const [authUser ,setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);

    //wrap the applicaton with this values
    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}
