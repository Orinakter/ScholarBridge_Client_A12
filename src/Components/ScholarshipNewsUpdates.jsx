import React from "react";
import { FaFilePdf } from "react-icons/fa";

const ScholarshipNewsUpdates = () => {
  return (
   

    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Scholarship News & Updates</h2>

      <div className="space-y-8">
       
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md border">
        <img src="https://i.ibb.co.com/xq6d1x5f/pexels-blazearth-7836480.jpg" alt="" className="w-24 h-24" />
         
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#126e82]">New Scholarship Opportunity for 2025</h3>
            <p className="text-sm text-gray-500">Feb 18, 2025</p>
            <p className="text-gray-600 text-sm">
              A new scholarship is now available for students pursuing STEM degrees. Apply by March 1st.
            </p>
          </div>
          <div className="border border-[#126e82] text-[#126e82] px-4 py-2 rounded-md flex items-center gap-2">
            <a href="/NewScholarship(1).pdf" download="NewScholarship(1).pdf"><FaFilePdf className="text-xl" /> Download</a>
          </div>
        </div>

        
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md border">
         <img src="https://i.ibb.co.com/Q3sKsVb4/pexels-shvetsa-4226218-1.jpg" alt="" className="w-24 h-24" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#126e82]">Deadline Extended for Global Scholarship</h3>
            <p className="text-sm text-gray-500">Feb 15, 2025</p>
            <p className="text-gray-600 text-sm">
              The application deadline for the Global Scholarship has been extended to March 10th.
            </p>
          </div>
          <div className="border border-[#126e82] text-[#126e82] px-4 py-2 rounded-md flex items-center gap-2">
            <a href="guide.pdf" download="guide.pdf"><FaFilePdf className="text-xl" />Download</a>
          </div>
        </div>

       
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md border">
          
          <img src="https://i.ibb.co.com/VcYwtkLJ/pexels-shkrabaanthony-5816283.jpg" alt="" className="w-24 h-24" /> 
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#126e82]">Financial Aid Information Session</h3>
            <p className="text-sm text-gray-500">Feb 10, 2025</p>
            <p className="text-gray-600 text-sm">
              Join us for a virtual session about available financial aid options and how to apply.
            </p>
          </div>
          <div className="border border-[#126e82] text-[#126e82] px-4 py-2 rounded-md flex items-center gap-2">
           <a href="/Financial.pdf" download="Financial.pdf"> <FaFilePdf className="text-xl" /> Download</a>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ScholarshipNewsUpdates;
