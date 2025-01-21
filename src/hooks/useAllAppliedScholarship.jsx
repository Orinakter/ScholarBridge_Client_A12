import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllAppliedScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const { data: appliedScholarships = [], isLoading: isScholarshipLoading, refetch } =
    useQuery({
      queryKey: ["applied-scholarship"],
      queryFn: async () => {
        const res = await axiosSecure.get("/scholarBridge");
        return res.data;
      },
    });
  return { appliedScholarships, isScholarshipLoading, refetch };
};

export default useAllAppliedScholarship;
