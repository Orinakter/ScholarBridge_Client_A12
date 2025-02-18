import React from "react";
import { FaUniversity } from "react-icons/fa";

const ScholarshipDeadline = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Scholarship Deadline Countdown
        </h2>
        <div className="p-4 text-center shadow-lg rounded-2xl border border-gray-200">
          <div className="w-12 h-12 mx-auto text-[#126e82] mb-4" />
          <p className="text-lg font-medium text-[#126e82]">Time Remaining:</p>
          <div className="flex justify-center gap-4 mt-2 text-xl font-bold">
            <span className="bg-[#E6F2FA] text-[#126e82] px-4 py-2 rounded-lg">
              00
            </span>
            <span className="bg-[#E6F2FA] text-[#126e82] px-4 py-2 rounded-lg">
              00
            </span>
            <span className="bg-[#E6F2FA] text-[#126e82] px-4 py-2 rounded-lg">
              00
            </span>
            <span className="bg-[#E6F2FA] text-[#126e82] px-4 py-2 rounded-lg">
              00
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Days : Hours : Minutes : Seconds
          </p>
        </div>
      </div>
    </div>
   
  );
};

export default ScholarshipDeadline;
