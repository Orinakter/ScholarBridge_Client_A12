import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading: isUsersLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  return { users, isUsersLoading, refetch };
};

export default useAllUser;
