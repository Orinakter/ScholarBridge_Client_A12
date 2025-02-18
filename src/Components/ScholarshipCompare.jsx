import React from 'react';
import { FaCheckCircle, FaDollarSign, FaFileAlt, FaUniversity, FaUserGraduate } from 'react-icons/fa';

const ScholarshipCompare = () => {
    return (
    
    <div className=" mx-auto py-12 px-12">
      <h2 className="text-4xl font-bold text-center mb-8">Scholarship Application Guide</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1: Register */}
        <div className="p-6 text-center bg-gray-50 shadow-lg">
          <FaUserGraduate className="text-4xl mx-auto text-[#126e82] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 1: Register</h3>
          <p className="text-gray-600">Create an account and provide your personal details. Make sure to double-check the information before submitting to avoid errors.</p>
        </div>

        {/* Step 2: Submit Documents */}
        <div className="p-6 text-center bg-gray-50 shadow-lg">
          <FaFileAlt className="text-4xl mx-auto text-[#126e82] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 2: Submit Documents</h3>
          <p className="text-gray-600">Upload required documents such as transcripts, recommendation letters, and essays. Ensure all documents are in the correct format and legible.</p>
        </div>

        {/* Step 3: Get Approved */}
        <div className="p-6 text-center bg-gray-50 shadow-lg">
          <FaCheckCircle className="text-4xl mx-auto text-[#126e82] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 3: Get Approved</h3>
          <p className="text-gray-600">Wait for approval and track the status of your application. You'll receive an email notification once a decision has been made.</p>
        </div>
      </div>
    </div>
    
    );
};

export default ScholarshipCompare;