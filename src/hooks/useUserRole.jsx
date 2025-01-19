import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { data: userRole = {}, isLoading: isUserRoleLoading } = useQuery({
    queryKey: ["user-role", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${email}`);
      return res.data.userRole;
    },
  });
  return { userRole, isUserRoleLoading };
};

export default useUserRole;
