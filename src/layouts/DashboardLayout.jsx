import { Outlet } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex gap-6">
      <div className="bg-gray-200 h-screen w-3/12 py-12">
        <Dashboard />
      </div>
      <div className="py-12 w-9/12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
