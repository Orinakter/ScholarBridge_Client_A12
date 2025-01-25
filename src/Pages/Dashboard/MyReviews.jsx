import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data = [] } = useQuery({
    queryKey: ["my-review", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/userReview/${user.email}`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Reviewer Name</th>
              <th>Review</th>
              <th>Date</th>
           
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {data.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.reviewerImg} alt="User Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.reviewerName}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>{item.review}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
