import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Loader from "../Components/Loader";
import { Link, useNavigate } from "react-router";

const AllScholarship = () => {

  const [search,setSearch] = useState("")
  const navigate = useNavigate()


  const { isLoading, data: scholarshipData } = useQuery({
    queryKey: ["scholarshipData",search],
    queryFn: () =>
      axios.get(`http://localhost:5000/scholarBridge?search=${search}`).then((data) => {
        return data.data;
      }),
  });

  
  if(isLoading){
    return <Loader></Loader>
  }

  

  return (
    <div className="">
      <div className="lg:max-w-[750px] mx-auto mb-8 flex flex-col lg:flex-row justify-center items-center">
        <label className="input input-bordered flex items-center gap-2">
          <input 
          onBlur={(e)=>setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
          
        </label>
        <button  className="btn bg-[#126e82] text-white font-bold">Search</button>
      </div>

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
             
              <button onClick={() => navigate(`/scholarship-details/${scholarship?._id}`)}
              className="btn bg-[#126e82] text-white font-bold">
                View Details
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
