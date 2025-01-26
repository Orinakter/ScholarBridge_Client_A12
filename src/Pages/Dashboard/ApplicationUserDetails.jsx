import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../Components/Loader';
import { useQuery } from '@tanstack/react-query';
import Heading from '../../Components/Heading';
import { createBrowserRouter } from 'react-router';

const ApplicationUserDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams()
    const { data: applicationUserData,isLoading:applicatonUserLoading } = useQuery({
        queryKey: ["applicationUserData", id],
        queryFn: async () => {
          const res = await axiosSecure(`/applicationUserData/${id}`);
          return res.data;
        },
      });
      if(applicatonUserLoading){
        return <Loader></Loader>
      }


      const {
        photo,
        phone,
        gender,
        address,
        degree,
        sscResult,
        hscResult,
        universityName,
        scholarShipCategory,
        subjectCategory,
        name,
        userPhoto,
        scholarshipID,
        date,
        paymentStatus,
        userEmail,
        feedback,
        status
      } = applicationUserData;
    

      
    
    return (
      <div className="container mx-auto mt-10 p-5">
      <Heading heading="Scholarship Details" />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* University Image */}
        <div className="h-64 bg-gray-200">
          {
             userPhoto ? (
            <img
              src={userPhoto}
              alt=""
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
            {universityName}
          </h2>
          <p className="text-gray-600">
            <strong>University:</strong> {scholarShipCategory}
          </p>
          <p className="text-gray-600">
            <strong>Result:</strong> {sscResult},  {hscResult}
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> {address}
          </p>
          <p className="text-gray-600">
            <strong>Subject Category:</strong> {subjectCategory}
          </p>
          <p className="text-gray-600">
            <strong>Gender:</strong> {gender}
          </p>
          <p className="text-gray-600">
            <strong>Degree:</strong> {degree}
          </p>
          <p className="text-gray-600">
            <strong>Scholarship Id:</strong> {scholarshipID}
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> {date}
          </p>
        </div>

        {/* Financial Details */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-[#126e82] mb-4">
            Financial Information
          </h3>
          <p className="text-gray-600">
            <strong>Payment Status:</strong> {paymentStatus || "Not specified"}
          </p>
          <p className="text-gray-600">
            <strong>Feedback:</strong> {feedback || "Not specified"}
          </p>
          <p className="text-gray-600">
            <strong>Status:</strong> {status || "Not specified"}
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#126e82] mb-4">
            Contact Information
          </h3>
          <strong>Photo:</strong> {photo}<br></br>
          <strong>Name:</strong> {name}
          <p className="text-gray-600">
            <strong>Email:</strong> {userEmail}<br></br>
            <strong>Phone:</strong> {phone}
          </p>
        </div>
      </div>
    </div>
    );
};

export default ApplicationUserDetails;