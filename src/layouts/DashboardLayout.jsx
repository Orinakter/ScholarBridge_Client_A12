import { Outlet } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="bg-[#126e82] text-gray-300 min-h-screen w-full lg:w-2/12 py-12">
        <Dashboard />
      </div>
      <div className="w-full lg:w-10/12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
