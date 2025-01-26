import Heading from "../../Components/Heading";
import useAllAppliedScholarship from "../../hooks/useAllAppliedScholarship";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { TbListDetails } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader";

const AllAppliedScholarship = () => {
  const [singleData, setSingleData] = useState([]);
  const [editId,setEditId] = useState("")

  const { appliedScholarships, isScholarshipLoading, refetch } =
    useAllAppliedScholarship();
    if(isScholarshipLoading){
      return <Loader></Loader>
    }

  const singleReviewHandler = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/eachAppliedScholarship/${id}`
      );
      setSingleData(data);
    } catch (error) {}
  };

  const feedbackHandler =async(e)=>{
    e.preventDefault();
    const feedback = e.target.feedback.value;

    await axios.patch(`http://localhost:5000/feedbackUpdate/${editId}?feedback=${feedback}`)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Feedback added successfully",
      showConfirmButton: false,
      timer: 1500
    });

  }


  const cancelHandler =(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await axios.patch(`http://localhost:5000/rejectApplication/${id}`)
        refetch()
        Swal.fire({
          title: "Reject!",
          text: "Rejected",
          icon: "success"
        });
      }
    });

  }




  return (
    <div>
      <Heading heading="All Applied Scholarship" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>University Name</th>
              <th>Scholarship Name</th>
              <th>Application Fee</th>
              <th>Application Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appliedScholarships.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.userPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.userEmail}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>
                  {item.paymentStatus === true && (
                    <span className="bg-green-400 px-2 py-1 rounded-lg text-white">
                      Paid
                    </span>
                  )}
                </td>
                <td>{item.status}</td>

                <td className="flex gap-3">
                  <button
                    onClick={async () => {
                      const modal = document.getElementById("my_modal_5");
                      if (modal) {
                        await singleReviewHandler(item?._id);
                        await modal.showModal();
                      }
                    }}
                    className="btn text-lg"
                  >
                    <TbListDetails />
                  </button>
                  <button
                  onClick={async () => {
                    const modal = document.getElementById("my_modal_6");
                    if (modal) {
                       setEditId(item?._id);
                      await modal.showModal();
                    }
                  }}
                    
                    className="btn"
                  >
                    <FaEdit />
                  </button>
                  <button
                  onClick={()=>cancelHandler(item?._id)} 
                  className="btn text-lg text-red-500">
                    <MdOutlineCancel />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* feedback-modal */}

        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={feedbackHandler}>

            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give Feedback</span>
                </label>
                <input
                  type="text"
                  name="feedback"
                  placeholder="Give your feedback"
                  className="input input-bordered"
                  required
                />
                
              </div>
            </div>
            <div className="mt-8">
              <button 
              onClick={() =>
                document.getElementById("my_modal_6").close()
              }
              className="btn">Submit Feedback</button>
            </div>

            </form>
            
          </div>
        </dialog>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="">
              <h1>{singleData?.universityName}</h1>
              <p>{singleData?.degree}</p>
              <p>{singleData?.scholarShipCategory}</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AllAppliedScholarship;
