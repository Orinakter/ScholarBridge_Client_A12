import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel, MdRateReview } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const MyApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [singleData, setSingleData] = useState([]);

  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applied-scholarship", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/scholarship-apply/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axiosSecure.delete(`/scholarship-apply/${id}`);
    if (res.data.deletedCount === 1) {
      refetch();
      toast.success("Deleted Success");
    }
  };

  const singleReviewHandler = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/applicationUserData/${id}`
      );
      setSingleData(data);
    } catch (error) {
      console.log(error);
    }
  };
 

  const reviewHandler = async(e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;
    const postDate = e.target.postDate.value;

    const reviewInfo = {
      rating,
      comment,
      postDate,
      universityName:singleData?.universityName,
      scholarShipCategory:singleData?.scholarShipCategory,
      universityId : singleData?.scholarshipID,
      scholarshipDataID:singleData?._id,
      userName: user?.displayName,
      userEmail:user?.email
    };
    await axios.post(`http://localhost:5000/review`,reviewInfo)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Review added Successfully",
      showConfirmButton: false,
      timer: 1500
    });
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
                  {app.status === "pending" ? (
                    <div className="">
                      <Link
                        to={`/dashboard/update-apply/${app._id}`}
                        className="btn text-lg"
                      >
                        <FaEdit />
                      </Link>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        Swal.fire("You can Not Edit No More");
                      }}
                      className="btn"
                    >
                      <FaEdit />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="btn text-lg text-red-500"
                  >
                    <MdOutlineCancel />
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("my_modal_5");
                      if (modal) {
                        modal.showModal();
                        singleReviewHandler(app?._id);
                      }
                    }}
                    className="btn"
                  >
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

        {/* modal */}

        {/* Open the modal using document.getElementById('ID').showModal() method */}

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
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#126e82]">
                    Comment Post Date
                  </label>
                  <input
                    type="date"
                    name="postDate"
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

export default MyApplication;
