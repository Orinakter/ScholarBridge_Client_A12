import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://scholar-bridge-server-side.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
