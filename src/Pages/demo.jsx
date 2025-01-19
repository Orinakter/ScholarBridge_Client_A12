
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const ScholarshipDetails = () => {
  const { id } = useParams(); 

  const { isLoading, data: scholarshipData={}, isError, error } = useQuery({
    queryKey: ['scholarshipData', id], 
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/topScholarship/${id}`);
      return response.data;
    },
    enabled: !!id, 
  });

  console.log(scholarshipData);







  
  

 
  

  
 
};

export default ScholarshipDetails;



