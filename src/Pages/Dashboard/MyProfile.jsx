import { useContext, useState } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MyProfile = () => {
  const { user } = useContext(authorizedContext);
  const {data:userProfileData,isLoading:userLoading}=useQuery({
    queryKey:["userProfileData",user?.email],
    queryFn:async()=>{
        
         const {data}=await axios.get(`https://scholar-bridge-server-side.vercel.app/singleUser/${user?.email}`)
         return data
        
    }
})


  
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
       <div className="lg:min-w-[800px] mx-auto border-2 rounded-lg shadow-md p-4 md:p-12">
        <h1 className="text-2xl text-center font-bold mb-4">{user?.displayName}</h1>
       <div className="flex justify-center items-center">
       <img src={user?.photoURL} alt="" className="w-32 h-32 rounded-full" />
       </div>
       <p className="text-center font-semibold">{userProfileData?.role}</p>

      </div>
    </div>
  );
};

export default MyProfile;
