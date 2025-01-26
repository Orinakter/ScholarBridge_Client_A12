import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [editId, setEditId] = useState("");
  const [singleData, setSingleData] = useState([]);
  const { user } = useContext(authorizedContext);
  const {
    data = [],
    isLoading,
    refetch: reviewRefetch,
  } = useQuery({
    queryKey: ["my-review", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/myReview/${user?.email}`);
      return res.data;
    },
  });

  const reviewHandler = async (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;
    const postDate = e.target.postDate.value;

    const reviewInfo = {
      rating,
      comment,
      postDate,
    };

    await axios.patch(`http://localhost:5000/editReview/${editId}`, reviewInfo);
    reviewRefetch();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Review update successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const singleReviewHandler = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/singleReview/${id}`
      );
      setSingleData(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        reviewRefetch();
        Swal.fire({
          title: "Deleted!",
          text: "Review delete successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Comments</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {data.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>

                <td>{item?.scholarShipCategory}</td>

                <td>{item?.universityName}</td>
                <td>{item?.comment}</td>
                <td>{item?.postDate}</td>
                <td className="flex gap-3">
                  <button
                    onClick={() => {
                      const modal = document.getElementById("my_modal_5");
                      if (modal) {
                        modal.showModal();
                        singleReviewHandler(item?._id);
                        setEditId(item?._id);
                      }
                    }}
                    className="btn text-xl text-green-600 "
                  >
                    {" "}
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteHandler(item?._id)}
                    className="btn text-xl text-red-600"
                  >
                    {" "}
                    <MdOutlineCancel />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* modal */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={reviewHandler}>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Give Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    defaultValue={singleData?.rating}
                    placeholder="rating"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* text area */}

                <span className="label-text">Write Your Comment</span>
                <div className="">
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="comment"
                    name="comment"
                    defaultValue={singleData?.comment}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#126e82]">
                    Comment Post Date
                  </label>
                  <input
                    type="date"
                    name="postDate"
                    defaultValue={singleData?.postDate}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="">
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="btn "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyReviews;
