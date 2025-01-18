import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const { data:scholarshipData={}} = useQuery({
    queryKey: ["individualData", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/topScholarship/${id}`);
      return res.data;
    },
  });

  

  return (
    <div className="mt-24 md:max-w-[800px] border-2 mx-auto rounded-xl bg-[#E6F2FA]">
      <div
        key={scholarshipData?._id}
        className="flex flex-col lg:flex-row justify-center items-center gap-16 p-8"
      >
      
        <div>
          <img
            src={scholarshipData?.universityImage}
            alt={`${scholarshipData?.universityName} Logo`}
            className="w-full h-[400px] rounded-xl"
          />
        </div>

       
        <div>
          <h1 className="text-lg">
            <span className="text-xl font-semibold">University Name:</span>{" "}
            {scholarshipData?.universityName}
          </h1>
          <p className="text-lg">
            <span className="text-xl font-semibold">Scholarship Category:</span>{" "}
            {scholarshipData?.scholarshipCategory}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Country:</span>{" "}
            {scholarshipData?.universityCountry}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">City:</span>{" "}
            {scholarshipData?.universityCity}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Application Deadline:</span>{" "}
            {scholarshipData?.ApplicationDeadline}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Scholarship Name:</span>{" "}
            {scholarshipData?.scholarshipName}
          </p>
          {/* <p className="text-lg">
            <span className="text-xl font-semibold">Description:</span>{" "}
            {scholarshipData?.scholarshipDescription}
          </p> */}
          <p className="text-lg">
            <span className="text-xl font-semibold">Post Date:</span>{" "}
            {scholarshipData?.postDate}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Service Charge:</span>{" "}
            {scholarshipData?.serviceCharge}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Application Fees:</span>{" "}
            {scholarshipData?.applicationFees}
          </p>
          <div className="mx-auto text-center mt-4">
            <button className="btn bg-[#126e82] text-white font-bold">Apply Scholarship</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ScholarshipDetails;
