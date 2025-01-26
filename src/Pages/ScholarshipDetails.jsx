import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import slide1 from "../assets/images/test-1.jpg";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const { data: scholarshipData = {} } = useQuery({
    queryKey: ["individualData", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/topScholarship/${id}`);
      return res.data;
    },
  });


  const { data: scholarshipReview = [] } = useQuery({
    queryKey: ["scholarshipReview", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/scholarshipReview/${id}`);
      return res.data;
    },
  });

  console.log(scholarshipReview);

  // console.log(scholarshipData);
  const serviceCharge = parseFloat(scholarshipData.serviceCharge);
  const applicationfee = parseFloat(scholarshipData.applicationFees);
  const amount = serviceCharge + applicationfee;
  // console.log(amount);

  return (
    <div className="">
      <div className="mt-24 md:max-w-[1220px] border-2 mx-auto rounded-xl bg-[#E6F2FA]">
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
              <span className="text-xl font-semibold">
                Scholarship Category:
              </span>{" "}
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
              <span className="text-xl font-semibold">
                Application Deadline:
              </span>{" "}
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
              <Link
                state={{ amount }}
                to={`/scholarship-details/${id}/payment`}
              >
                <button className="btn bg-[#126e82] text-white font-bold">
                  Apply Scholarship
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Scholars Say
        </h2>
        <section>
         {
          scholarshipReview.length === 0 ? <div className="">
            <h1>No Review Found</h1>
          </div>:
           <Swiper
           slidesPerView={2}
           spaceBetween={5}
           pagination={{
             clickable: true,
           }}
           breakpoints={{
             640: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 4,
               spaceBetween: 40,
             },
             1024: {
               slidesPerView: 4,
               spaceBetween: 50,
             },
           }}
           modules={[Pagination]}
           className="my-8"
         >
           {
             scholarshipReview.map(item=>(
               <SwiperSlide key={item?._id}>
             <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
               <div className="flex items-center mb-4">
                 <img
                   src={item?.userPhoto}
                   alt=""
                   className="w-16 h-16 rounded-full object-cover mr-4"
                 />
                 <div>
                   <h3 className="font-bold text-lg">{item?.userName}</h3>
                   <p className="text-sm text-gray-500">{item?.postDate}</p>
                 </div>
               </div>
               <div className="flex items-center mb-4">
                 <Rating style={{ maxWidth: 180 }} value={parseInt(item?.rating)} readOnly />
               </div>
               <p className="text-gray-600">
                 {item?.comment}
               </p>
             </div>
           </SwiperSlide>
             ))
           }
         </Swiper>

         }
        </section>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
