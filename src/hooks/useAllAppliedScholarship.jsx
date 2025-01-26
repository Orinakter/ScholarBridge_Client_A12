import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllAppliedScholarship = (sort) => {
  const axiosSecure = useAxiosSecure();
  const { data: appliedScholarships = [], isLoading: isScholarshipLoading, refetch } =
    useQuery({
      queryKey: ["applied-scholarship",sort],
      queryFn: async () => {
        const res = await axiosSecure.get(`/scholarship-apply?sort=${sort}`);
        return res.data;
      },
    });
  return { appliedScholarships, isScholarshipLoading, refetch };
};

export default useAllAppliedScholarship;
