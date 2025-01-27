import { useParams } from "react-router";
import Heading from "../../Components/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import imgUpload from "../../ImageUpload/imgUpload";
import Swal from "sweetalert2";

const EditScholarShip = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { data: scholarship = {} } = useQuery({
    queryKey: ["edit-apply", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure(`/scholarBridge/${id}`);
      return res.data;
    },
  });

  const {
    scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    universityRank,
    tutionFee,
    applicationFees,
    serviceCharge,
    postEmail,
    subjectCategory,
    scholarshipCategory,
    degree,
  } = scholarship;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageUrl = await imgUpload(image);
    data.universityImage = imageUrl;
    axiosSecure
      .put(`https://scholar-bridge-server-side.vercel.app/scholarBridge/${id}`, data)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Schoolarship update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Heading heading="Edit Scholarship" />
      <div>
        <div className="container mx-auto mt-10 p-5 bg-[#CEE6F2]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" grid md:grid-cols-2 justify-center items-center gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Scholarship Name
              </label>
              <input
                type="text"
                defaultValue={scholarshipName}
                {...register("scholarshipName")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                University Name
              </label>
              <input
                type="text"
                defaultValue={universityName}
                {...register("universityName")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                University Image
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                University Country
              </label>
              <input
                type="text"
                defaultValue={universityCountry}
                {...register("universityCountry")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                University City
              </label>
              <input
                type="text"
                defaultValue={universityCity}
                {...register("universityCity")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                University World Rank
              </label>
              <input
                type="number"
                defaultValue={universityRank}
                {...register("universityRank")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Subject Category
              </label>
              <select
                name="subjectCategory"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
                defaultValue={subjectCategory}
                {...register("subjectCategory")}
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
                defaultValue={scholarshipCategory}
                {...register("scholarshipCategory")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:r[#126e82] focus:bor[#126e82] sm:text-sm"
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
                defaultValue={degree}
                {...register("degree")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus[#126e82] focus:border-[#126e82] sm:text-sm"
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
                defaultValue={tutionFee}
                {...register("tutionFee")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Application Fees
              </label>
              <input
                type="text"
                defaultValue={applicationFees}
                {...register("applicationFees")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Service Charge
              </label>
              <input
                type="text"
                defaultValue={serviceCharge}
                {...register("serviceCharge")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Application Deadline
              </label>
              <input
                type="date"
                {...register("ApplicationDeadline")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Scholarship Post Date
              </label>
              <input
                type="date"
                {...register("postDate")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#126e82]">
                Posted User Email
              </label>
              <input
                type="email"
                defaultValue={postEmail}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#126e82] focus:border-[#126e82] sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#126e82] text-white font-semibold rounded-md hover:bg-[#126e82] focus:outline-none focus:ring-2 focus:ring-[#126e82] focus:ring-opacity-50 col-span-2"
            >
              Update Scholarship
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditScholarShip;
