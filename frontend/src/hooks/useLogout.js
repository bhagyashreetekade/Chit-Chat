import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const logout = async () =>{
    setLoading(true);

    try {

      const res = await fetch("/api/auth/logout",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }
      });

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }

      //remove object user-token localstorage 
      localStorage.removeItem("chat-user");
      //context
      setAuthUser(null);
      toast.success("Logout successfull");

    } catch (error) {
        toast.error(error.message);

    }finally{
        setLoading(false);
    }
  }

  return {loading,logout};
}

export default useLogout