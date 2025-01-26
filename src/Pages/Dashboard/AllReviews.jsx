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
      const res = await axios.get(`http://localhost:5000/allReviewData`);
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
        await axios.delete(`http://localhost:5000/reviewDelete/${id}`)
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allReview.map((item) => (
          <div className="">
            <img src={item?.userPhoto} alt="" />
            <h3>{item?.universityName}</h3>
            <h2>{item?.scholarShipCategory}</h2>

            <p>{item?.userName}</p>
            <p>{item?.postDate}</p>
            <p>{item?.ratin}</p>
            <p>{item?.comment}</p>
            <div className="">
              <button
               onClick={() => deleteHandler(item?._id)}
                    className="btn text-xl bg-red-600 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
