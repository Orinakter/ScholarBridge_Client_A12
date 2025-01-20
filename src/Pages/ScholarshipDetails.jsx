import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/images/test-1.jpg";
import slide2 from "../assets/images/test-2.jpg";
import slide3 from "../assets/images/test-3.jpg";

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

// console.log(scholarshipData);
const serviceCharge = parseFloat(scholarshipData.serviceCharge)
const applicationfee = parseFloat(scholarshipData.applicationFees)
const amount = serviceCharge+applicationfee
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
            <Link state={{amount}}  to={`/scholarship-details/${id}/payment`}>
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
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
           <div className="flex items-center mb-4">
             <img
               src={slide1}
               alt=""
               className="w-16 h-16 rounded-full object-cover mr-4"
             />
             <div>
               <h3 className="font-bold text-lg">Emily Johnson</h3>
               <p className="text-sm text-gray-500">January 5, 2025</p>
             </div>
           </div>
           <div className="flex items-center mb-4">
             <div className="rating rating-md">
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
                 defaultChecked
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
               <input
                 type="radio"
                 name="rating-7"
                 className="mask mask-star-2 bg-orange-400"
               />
             </div>
           </div>
           <p className="text-gray-600">
             The process was smooth, and I found multiple scholarships that
             matched my profile. Highly recommend ScholarBridge
           </p>
         </div>
         </SwiperSlide>
       </Swiper>
     </section>
    </div>
     </div>
    
  );
};

export default ScholarshipDetails;
