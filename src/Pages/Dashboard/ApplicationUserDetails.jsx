import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../Components/Loader';
import { useQuery } from '@tanstack/react-query';

const ApplicationUserDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams()
    const { data: applicationUserData,isLoading:applicatonUserLoading } = useQuery({
        queryKey: ["applicationUserData", id],
        queryFn: async () => {
          const res = await axiosSecure(`/applicationUserData/${id}`);
          return res.data;
        },
      });
      if(applicatonUserLoading){
        return <Loader></Loader>
      }

      console.log(applicationUserData);
    
    return (
        <div>
           
        </div>
    );
};

export default ApplicationUserDetails;