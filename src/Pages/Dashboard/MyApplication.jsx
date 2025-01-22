import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from 'react-toastify';
import { Link } from "react-router";

const MyApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applied-scholarship", user?.email],
    enabled: !!user?.email, // Ensure query runs only if email is available
    queryFn: async () => {
      const res = await axiosSecure(`/scholarship-apply/${user?.email}`);
      return res.data;
    },
  });
  console.log(applications);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axiosSecure.delete(`/scholarship-apply/${id}`);
    if(res.data.deletedCount === 1){
      refetch()
      toast.success('Deleted Success')
    }
  };
  const handleEdit = () => {
    console.log("hi");
    
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>University Name</th>
              <th>University Addresh</th>
              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.universityName}</td>
                <td>{app.universityCity}</td>
                <td>{app?.feedback}</td>
                <td>{app.subjectCategory || "No"}</td>
                <td>{app.degree}</td>
                <td>${app.applicationFees}</td>
                <td>${app.serviceCharge}</td>
                <td className="space-x-3 flex justify-center">
                  <button className="btn text-lg">
                    <TbListDetails />
                  </button>
                 {
                  app.status === "pending"? <div className="">
                  <Link to={`/dashboard/update-apply/${app._id}`} className="btn text-lg">
                     <FaEdit />
                   </Link>
                  </div> : <button className="btn">No editable</button>
                 }
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="btn text-lg text-red-500"
                  >
                    <MdOutlineCancel />
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
