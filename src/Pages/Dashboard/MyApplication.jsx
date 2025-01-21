import { useQuery } from "@tanstack/react-query";
import React from "react";

import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const { data: applications = [] } = useQuery({
    queryKey: ["applied-scholarship", user?.email],
    enabled: !!user?.email, // Ensure query runs only if email is available
    queryFn: async () => {
      const res = await axiosSecure(`/scholarship-apply/${user?.email}`);
      return res.data;
    },
  });
  console.log(applications);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>University Name</th>

              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.universityName}</td>
                <td>{app?.feedback || "Pending"}</td>
                <td>{app.subjectCategory || "No"}</td>
                <td>{app.degree}</td>
                <td>{app.subjectCategory}</td>
                <td>${app.applicationFees}</td>
                <td>${app.serviceCharge}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
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
