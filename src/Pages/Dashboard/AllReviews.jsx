import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AllReviews = () => {
  const { user } = useContext(authorizedContext);
  const { data: allReview = [], refetch } = useQuery({
    queryKey: ["applied-scholarship", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`https://scholar-bridge-server-side.vercel.app/allReviewData`);
      return res.data;
    },
  });

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`https://scholar-bridge-server-side.vercel.app/reviewDelete/${id}`)
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Review delete successfully",
          icon: "success",
        });
      }
    });
  };

  

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">All Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
        {allReview.map((item) => (
          <div className="border-2 p-6 rounded-xl">
            <img src={item?.userPhoto} alt="" className="w-full h-[250px]" />
            <h3 className="text-xl font-bold mt-3">{item?.universityName}</h3>
            <h2 className=""> <span className="font-semibold text-lg">ScholarshipCategory:</span> {item?.scholarShipCategory}</h2>

            <p><span className="font-semibold text-lg">UserName:</span> {item?.userName}</p>
            <p><span className="font-semibold text-lg">PostDate:</span> {item?.postDate}</p>
            <p><span className="font-semibold text-lg">Rating:</span> {item?.rating}</p>
            <p><span className="font-semibold text-lg">Comment:</span> {item?.comment}</p>
            <div className="mt-4 text-center">
              <button
               onClick={() => deleteHandler(item?._id)}
                    className="btn  bg-red-600 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
