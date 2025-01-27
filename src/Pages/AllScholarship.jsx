import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Loader from "../Components/Loader";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AllScholarship = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { count } = useLoaderData();
  const itemPerPage = 6;
  const totalPages = Math.ceil(count / itemPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const page = [...Array(totalPages).keys()];

  const { isLoading, data: scholarshipData } = useQuery({
    queryKey: ["scholarshipData", search, currentPage, itemPerPage],
    queryFn: () =>
      axios
        .get(
          `https://scholar-bridge-server-side.vercel.app/scholarBridge?search=${search}&page=${currentPage}&size=${itemPerPage}`
        )
        .then((data) => {
          return data.data;
        }),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  const resetHandler = ()=>{
    setSearch("")
    setCurrentPage(0)
  }

  return (
   <div className="">
     <div className="">
      {scholarshipData.length === 0 ? (
        <div className="py-10">
          <h1 className="text-3xl text-center font-bold">No Data Found</h1>
          <div className="flex justify-center mt-12">
            <button className="btn bg-[#126e82] text-white font-bold" onClick={resetHandler}>Reset</button>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="lg:max-w-[750px] mx-auto mb-8 flex flex-col lg:flex-row justify-center items-center">
            <label className="input input-bordered flex items-center gap-2">
              <input
                onBlur={(e) => setSearch(e.target.value)}
                type="text"
                className="grow"
                placeholder="Search"
              />
            </label>
            <button className="btn bg-[#126e82] text-white font-bold">
              Search
            </button>
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
                  <button
                    onClick={() =>
                      navigate(`/scholarship-details/${scholarship?._id}`)
                    }
                    className="btn bg-[#126e82] text-white font-bold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 items-center gap-3">
            <button
              onClick={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              className="flex w-32 justify-center items-center py-2 px-5 rounded-lg  gap-2 bg-[#126e82] text-white font-bold"
            >
              <span className="text-xl">
                <FaArrowLeftLong />
              </span>
              <span className="font-semibold">Prev</span>
            </button>
            {page.map((item) => (
              <button
                onClick={() => setCurrentPage(item)}
                key={item}
                className={`
                    text-xl ${
                      currentPage === item && "bg-[#CEE6F2]"
                    } font-semibold flex justify-center items-center
                   bg-blue-200 border-2 h-12 w-12 border-blue-50 p-3 rounded-full
                    `}
              >
                {item + 1}
              </button>
            ))}
            <button
              onClick={() => {
                if (currentPage < page.length - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="flex w-32 justify-center items-center py-2 px-5 rounded-lg  gap-2 bg-[#126e82] text-white font-bold"
            >
              <span className="font-semibold">Next</span>
              <span className=" text-xl">
                <FaArrowRightLong />
              </span>
            </button>
          </div>

        </div>
      )}
      
    </div>

   </div>
  );
};

export default AllScholarship;
