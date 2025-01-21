import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllScholarship = () => {
  const { isPending, data: scholarshipData } = useQuery({
    queryKey: ["scholarshipData"],
    queryFn: () =>
      axios.get(`http://localhost:5000/scholarBridge`).then((data) => {
        return data.data;
      }),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {scholarshipData?.map((scholarship) => (
        <div key={scholarship?._id} className="border-2 p-8 rounded-xl">
          <img
            src={scholarship?.universityImage}
            alt=""
            className="w-full h-[250px] rounded-xl"
          />
          <h2 className="mt-4">
            <span className="text-[#126e82] font-semibold ">
              UniversityName :{" "}
            </span>
            {scholarship?.universityName}
          </h2>
          <p>
            <span className="text-[#126e82] font-semibold">
              ScholarshipCategory :{" "}
            </span>
            {scholarship?.scholarshipCategory}
          </p>
          <p>
            <span className="text-[#126e82] font-semibold">
              UniversityCountry :{" "}
            </span>
            {scholarship?.universityCountry}
          </p>
          <p>
            <span className="text-[#126e82] font-semibold ">
              ApplicationDeadline :{" "}
            </span>
            {scholarship?.ApplicationDeadline}
          </p>
          <p>
            <span className="text-[#126e82] font-semibold">
              SubjectCategory :{" "}
            </span>
            {scholarship?.subjectCategory}
          </p>
          <p>
            <span className="text-[#126e82] font-semibold">
              ApplicationFees :{" "}
            </span>
            {scholarship?.applicationFees}
          </p>

          <div className="mx auto text-center mt-4">
            <button className="btn bg-[#126e82] text-white font-bold">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllScholarship;
