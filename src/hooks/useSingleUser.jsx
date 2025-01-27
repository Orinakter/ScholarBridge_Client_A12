import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authorizedContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const useSingleUser = () => {
    const {user} = useContext(authorizedContext)
    const {data:userData,isLoading:userLoading}=useQuery({
        queryKey:["userData",user?.email],
        queryFn:async()=>{
            
             const {data}=await axios.get(`https://scholar-bridge-server-side.vercel.app/getSingleUser/${user?.email}`)
             return data
            
        }
    })
    return {userData,userLoading}
};

export default useSingleUser;