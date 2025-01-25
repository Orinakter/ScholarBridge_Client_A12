import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authorizedContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const useSingleUser = () => {
    const {user} = useContext(authorizedContext)
    const {data:userData}=useQuery({
        queryKey:["userData",user?.email],
        queryFn:async()=>{
            
             const {data}=await axios.get(`http://localhost:5000/getSingleUser/${user?.email}`)
             return data
            
        }
    })
    return {userData}
};

export default useSingleUser;