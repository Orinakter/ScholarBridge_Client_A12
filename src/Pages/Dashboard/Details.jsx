import { useParams } from "react-router";
import Heading from "../../Components/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { id } = useParams();

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
    universityImage,
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

  return (
    <div className="container mx-auto mt-10 p-5">
      <Heading heading="Scholarship Details" />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* University Image */}
        <div className="h-64 bg-gray-200">
          {universityImage ? (
            <img
              src={universityImage}
              alt="University"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        {/* Scholarship Details */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-[#126e82] mb-4">
            {scholarshipName}
          </h2>
          <p className="text-gray-600">
            <strong>University:</strong> {universityName}
          </p>
          <p className="text-gray-600">
            <strong>Country:</strong> {universityCountry}, {universityCity}
          </p>
          <p className="text-gray-600">
            <strong>World Rank:</strong> #{universityRank}
          </p>
          <p className="text-gray-600">
            <strong>Subject Category:</strong> {subjectCategory}
          </p>
          <p className="text-gray-600">
            <strong>Scholarship Category:</strong> {scholarshipCategory}
          </p>
          <p className="text-gray-600">
            <strong>Degree:</strong> {degree}
          </p>
        </div>

        {/* Financial Details */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-[#126e82] mb-4">
            Financial Information
          </h3>
          <p className="text-gray-600">
            <strong>Tuition Fees:</strong> {tutionFee || "Not specified"}
          </p>
          <p className="text-gray-600">
            <strong>Application Fees:</strong> {applicationFees || "Not specified"}
          </p>
          <p className="text-gray-600">
            <strong>Service Charge:</strong> {serviceCharge || "Not specified"}
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#126e82] mb-4">
            Contact Information
          </h3>
          <p className="text-gray-600">
            <strong>Posted By:</strong> {postEmail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
