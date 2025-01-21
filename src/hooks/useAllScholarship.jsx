import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllScholarship = () => {
    const axiosSecure = useAxiosSecure()
   const {data: allScholarship=[], refetch}=useQuery({
    queryKey: ['allScholarship'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/scholarBridge')
        return res.data
    }
   })
   return {allScholarship,refetch}
};

export default useAllScholarship;