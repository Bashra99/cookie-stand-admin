import {createContext,useState} from 'react';
import axios from 'axios'
export const AuthContext=createContext();
export default function AuthWrapper({children}){
    const[globalState,setGlobalState]=useState({

        tokens:null,
        login
    })
   async function login(userInfo){        
        const url='http://3.228.10.15:8001/api/token/'
        try {
        const res= await axios.post(url,userInfo)
        console.log(res.data)
        setGlobalState({
            tokens:res.data,
            login
        })
    }catch(error) {
            console.error(error);
    }
    }  
    return (
        <AuthContext.Provider value={globalState}>

            {children}

        </AuthContext.Provider>
    )
    }