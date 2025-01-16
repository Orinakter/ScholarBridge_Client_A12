import React from "react";
import { NavLink } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineSettingsApplications, MdReviews } from "react-icons/md";
const Dashboard = () => {
  const isUser = true;
  const isAdmin = false;
  const isModerator = !true;
  return (
    <div className="px-10 space-y-4">
      <h1 className="font-bold text-xl text-white text-center">Dashboard</h1>
      {isUser && (
        <>
        
          <NavLink to="my-application" className="btn w-full">
          <MdOutlineSettingsApplications className="text-lg"/>My Application
          </NavLink>
          <NavLink to="my-reviews" className="btn w-full">
          <MdReviews className="text-lg" /> My Reviews
          </NavLink>
        </>
      )}

      {isAdmin && (
        <>
          <NavLink to="my-profile" className="btn w-full">
            Admin
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Add Scholarship
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Manage Scholarships
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Manage Applied Application
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Manage User
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Manage Review
          </NavLink>
        </>
      )}
      {isModerator && (
        <>
          <NavLink to="my-profile" className="btn w-full">
            Manage Scholarships
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            All Reviews
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            All Applied Scholarship
          </NavLink>
          <NavLink to="my-profile" className="btn w-full">
            Add Scholarship
          </NavLink>
        </>
      )}
      {/* Shared Links */}
      <div className="divider"></div>
      <NavLink to="my-profile" className="btn w-full">
        <FaUser className="text-lg" /> My Profile
      </NavLink>
      <NavLink to="/" className="btn w-full">
        <AiFillHome className="text-lg" /> Home
      </NavLink>
    </div>
  );
};

export default Dashboard;
