import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTopScholarship = ( id ) => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarShip = {} } = useQuery({
    queryKey: ["scholarship-details"],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/topScholarship/${id}`);
      return res.data
    },
  });
  console.log(scholarShip);
  return { scholarShip };
};

export default useTopScholarship;
