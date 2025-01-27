
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const ScholarshipDetails = () => {
  const { id } = useParams(); 

  const { isLoading, data: scholarshipData={}, isError, error } = useQuery({
    queryKey: ['scholarshipData', id], 
    queryFn: async () => {
      const response = await axios.get(`https://scholar-bridge-server-side.vercel.app/topScholarship/${id}`);
      return response.data;
    },
    enabled: !!id, 
  });









  
  

 
  

  
 
};

export default ScholarshipDetails;



