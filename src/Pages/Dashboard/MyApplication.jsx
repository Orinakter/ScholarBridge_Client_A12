import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel, MdRateReview } from "react-icons/md";
import { toast } from 'react-toastify';
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  

  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applied-scholarship", user?.email],
    enabled: !!user?.email, 
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
              <th>University Address</th>
              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Application Status</th>
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
                <td>{app.status}</td>
                <td className="space-x-3 flex justify-center">
                  <Link to={`apllicationUserDetails/${app?._id}`}>
                  <button className="btn text-lg">
                    <TbListDetails />
                  </button>
                  </Link>
                 {
                  app.status === "pending"? <div className="">
                  <Link to={`/dashboard/update-apply/${app._id}`} className="btn text-lg">
                     <FaEdit />
                   </Link>
                  </div> : <button onClick={()=>{
                    Swal.fire("You can Not Edit No More");
                  }}
                  className="btn"><FaEdit /></button>
                 }
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="btn text-lg text-red-500"
                  >
                    <MdOutlineCancel />
                  </button>
                  <button className="btn">
                  <MdRateReview />
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
