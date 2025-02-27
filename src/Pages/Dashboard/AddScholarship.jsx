import axios from "axios";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Heading from "../../Components/Heading";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import imgUpload from "../../ImageUpload/imgUpload";

const AddScholarship = () => {
  const [subjectCategory, setSubjectCategory] = useState("");
  const [scholarshipCategory, setScholarshipCategory] = useState("");
  const [degree, setDegree] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useContext(authorizedContext);

  const addscholarshiphandler = async (e) => {
    e.preventDefault();
    const scholarshipName = e.target.scholarshipName.value;
    const universityName = e.target.universityName.value;
    const universityCountry = e.target.universityCountry.value;
    const universityCity = e.target.universityCity.value;
    const universityRank = e.target.universityRank.value;
    const tutionFee = e.target.tutionFee.value;
    const applicationFees = e.target.applicationFees.value;
    const serviceCharge = e.target.serviceCharge.value;
    const ApplicationDeadline = e.target.ApplicationDeadline.value;
    const postDate = e.target.postDate.value;
    const postEmail = e.target.postEmail.value;
    const imageUrl = await imgUpload(image);
   

   

    const addScholarshipInfo = {
      scholarshipName,
      universityName,
      universityImage: imageUrl,
      universityCountry,
      universityCity,
      universityRank,
      tutionFee,
      applicationFees,
      serviceCharge,
      ApplicationDeadline,
      postDate,
      postEmail,
      subjectCategory,
      scholarshipCategory,
      degree,
    };

    await axios
      .post(`https://scholar-bridge-server-side.vercel.app/scholarBridge`, addScholarshipInfo)
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Schoolarship added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <Heading heading="Add Scholarship" />
      <div className="container mx-auto mt-10 p-5 bg-[#CEE6F2]">
        <form
          onSubmit={addscholarshiphandler}
          className=" grid md:grid-cols-2 justify-center items-center gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarshipName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              University Name
            </label>
            <input
              type="text"
              name="universityName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              University Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              University Country
            </label>
            <input
              type="text"
              name="universityCountry"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              University City
            </label>
            <input
              type="text"
              name="universityCity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              University World Rank
            </label>
            <input
              type="number"
              name="universityRank"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Subject Category
            </label>
            <select
              onChange={(e) => setSubjectCategory(e.target.value)}
              name="subjectCategory"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            >
              <option value="">Select a category</option>
              <option value="agriculture">Agriculture</option>
              <option value="engineering">Engineering</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div>
            <label
              name="scholarshipCategory"
              className="block text-sm font-medium text-[#126e82]"
            >
              Scholarship Category
            </label>
            <select
              onChange={(e) => setScholarshipCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:r[#126e82] focus:bor[#126e82] sm:text-sm"
              required
            >
              <option value="">Select a category</option>
              <option value="fullfund">Full fund</option>
              <option value="partial">Partial</option>
              <option value="selfFund">Self-fund</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Degree
            </label>
            <select
              onChange={(e) => setDegree(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            >
              <option value="">Select a degree</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Tuition Fees (optional)
            </label>
            <input
              type="text"
              name="tutionFee"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Application Fees
            </label>
            <input
              type="text"
              name="applicationFees"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Service Charge
            </label>
            <input
              type="text"
              name="serviceCharge"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Application Deadline
            </label>
            <input
              type="date"
              name="ApplicationDeadline"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Scholarship Post Date
            </label>
            <input
              type="date"
              name="postDate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#126e82]">
              Posted User Email
            </label>
            <input
              type="email"
              name="postEmail"
              defaultValue={user?.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#126e82] text-white font-semibold rounded-md hover:bg-[#126e82] focus:outline-none focus:ring-2 focus:ring-[#126e82] focus:ring-opacity-50 col-span-2"
          >
            Add Scholarship
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddScholarship;
