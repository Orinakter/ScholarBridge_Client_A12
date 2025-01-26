import { useQuery } from "@tanstack/react-query";
import Heading from "../../Components/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import Loader from "../../Components/Loader";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateApply = () => {
  const [gender,setGender] = useState("")
  const [degree,setDegree] = useState("")
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const { id } = useParams();
  const { data: applicationUserData, isLoading: applicatonUserLoading } =
    useQuery({
      queryKey: ["applicationUserData", id],
      queryFn: async () => {
        const res = await axiosSecure(`/applicationUserData/${id}`);
        return res.data;
      },
    });
  if (applicatonUserLoading) {
    return <Loader></Loader>;
  }
  

  const updateHandler = async(e)=>{
    e.preventDefault();

    const phone = e.target.phone.value
    const photo = e.target.photo.value
    const address = e.target.address.value
    const sscResult = e.target.sscResult.value
    const hscResult= e.target.hscResult.value
    const universityName = e.target.universityName.value
    const scholarShipCategory = e.target.scholarShipCategory.value
    const subjectCategory = e.target.subjectCategory.value

    const updateInfo = {
      phone,
      photo,
      address,
      sscResult,
      hscResult,
      universityName,
      scholarShipCategory,
      subjectCategory,
      gender,
      degree
    }

   
    await axiosSecure.patch(`/updateApplicationData/${id}`,updateInfo)
    .then(()=>{
      navigate("/dashboard/my-application")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    })

  }

  return (
    // <div className="">
    //   <Heading heading="Update Apply" />

    //   <div className="p-12">
    //   <form onSubmit={updateHandler} className="w-full bg-[#CEE6F2] text-center">
    //           {/* Phone */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Phone Number</span>
    //             </div>
    //             <input
    //               name="phone"
    //               defaultValue={applicationUserData?.phone}
    //               type="text"
    //               placeholder="Phone Number"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* Photo */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Photo</span>
    //             </div>
    //             <input
    //               name="photo"
    //               defaultValue={applicationUserData?.photo}
    //               type="text"
    //               placeholder="Photo URL"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* Gender */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Gender</span>
    //             </div>
    //             <select
    //             onChange={(e)=>setGender(e.target.value)}
    //             defaultValue={applicationUserData?.gender}
                  
    //               className="input"
    //             >
    //               <option value="male">Male</option>
    //               <option value="female">Female</option>
    //               <option value="other">Other</option>
    //             </select>
    //           </label>

    //           {/* Address */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Address</span>
    //             </div>
    //             <input
    //              name="address"
    //              defaultValue={applicationUserData?.address}
    //               type="text"
    //               placeholder="Address"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* Degree */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Degree</span>
    //             </div>
    //             <select
    //              onChange={(e)=>setDegree(e.target.value)}
    //              defaultValue={applicationUserData?.degree}
    //               className="input"
    //             >
    //               <option value="Diploma">Diploma</option>
    //               <option value="Bachelor">Bachelor</option>
    //               <option value="Masters">Masters</option>
    //             </select>
    //           </label>
    //           {/* SSC */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">SSC Result</span>
    //             </div>
    //             <input
    //               name="sscResult"
    //               defaultValue={applicationUserData?.sscResult}
    //               type="text"
    //               placeholder="SSC result"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* HSC */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">HSC Result</span>
    //             </div>
    //             <input
    //               name="hscResult"
    //               defaultValue={applicationUserData?.hscResult}
    //               type="text"
    //               placeholder="HSC result"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* University Name */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">University Name</span>
    //             </div>
    //             <input
    //              name="universityName"
    //              defaultValue={applicationUserData?.universityName}
    //               readOnly
    //               type="text"
    //               placeholder="University Name"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* Scholarship Category */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Scholarship Category </span>
    //             </div>
    //             <input
    //              name="scholarShipCategory"
    //              defaultValue={applicationUserData?.scholarShipCategory}
    //               readOnly
    //               type="text"
    //               placeholder="Scholarship Category "
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>
    //           {/* Subject Category */}
    //           <label className="form-control w-full ">
    //             <div className="label">
    //               <span className="label-text">Subject Category </span>
    //             </div>
    //             <input
    //              name="subjectCategory"
    //              defaultValue={applicationUserData?.subjectCategory
    //               }
    //               readOnly
    //               type="text"
    //               placeholder="Subject Category"
    //               className="input input-bordered w-full max-w-xs"
    //             />
    //           </label>

    //           <button type="submit" className="btn btn-secondary mt-2">
    //             Submit
    //           </button>
    //         </form>
    //   </div>
    // </div>



    <div className="flex items-center justify-center min-h-screen ">
  <div className=" rounded-lg w-full max-w-4xl p-8">
    <Heading heading="Update Apply" />

    <form onSubmit={updateHandler} className="w-full bg-[#CEE6F2] rounded-lg p-6 text-center">
      {/* Phone */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Phone Number</span>
        </div>
        <input
          name="phone"
          defaultValue={applicationUserData?.phone}
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
      </label>
      {/* Photo */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Photo</span>
        </div>
        <input
          name="photo"
          defaultValue={applicationUserData?.photo}
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
      </label>
      {/* Gender */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Gender</span>
        </div>
        <select
          onChange={(e) => setGender(e.target.value)}
          defaultValue={applicationUserData?.gender}
          className="input input-bordered w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      {/* Address */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Address</span>
        </div>
        <input
          name="address"
          defaultValue={applicationUserData?.address}
          type="text"
          placeholder="Address"
          className="input input-bordered w-full"
        />
      </label>
      {/* Degree */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Degree</span>
        </div>
        <select
          onChange={(e) => setDegree(e.target.value)}
          defaultValue={applicationUserData?.degree}
          className="input input-bordered w-full"
        >
          <option value="Diploma">Diploma</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Masters">Masters</option>
        </select>
      </label>
      {/* SSC */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">SSC Result</span>
        </div>
        <input
          name="sscResult"
          defaultValue={applicationUserData?.sscResult}
          type="text"
          placeholder="SSC result"
          className="input input-bordered w-full"
        />
      </label>
      {/* HSC */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">HSC Result</span>
        </div>
        <input
          name="hscResult"
          defaultValue={applicationUserData?.hscResult}
          type="text"
          placeholder="HSC result"
          className="input input-bordered w-full"
        />
      </label>
      {/* University Name */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">University Name</span>
        </div>
        <input
          name="universityName"
          defaultValue={applicationUserData?.universityName}
          readOnly
          type="text"
          placeholder="University Name"
          className="input input-bordered w-full"
        />
      </label>
      {/* Scholarship Category */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Scholarship Category </span>
        </div>
        <input
          name="scholarShipCategory"
          defaultValue={applicationUserData?.scholarShipCategory}
          readOnly
          type="text"
          placeholder="Scholarship Category "
          className="input input-bordered w-full"
        />
      </label>
      {/* Subject Category */}
      <label className="form-control w-full mb-4">
        <div className="label">
          <span className="label-text text-[#126e82]">Subject Category </span>
        </div>
        <input
          name="subjectCategory"
          defaultValue={applicationUserData?.subjectCategory}
          readOnly
          type="text"
          placeholder="Subject Category"
          className="input input-bordered w-full"
        />
      </label>
      <button type="submit" className="btn bg-[#126e82] text-white font-bold mt-4 w-full">
        Submit
      </button>
    </form>
  </div>
</div>










  );
};

export default UpdateApply;
