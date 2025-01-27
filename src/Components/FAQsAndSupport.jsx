import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const FAQsAndSupport = () => {
    return (
        <div>
             <div className="bg-[#CEE6F2] py-16 px-4">
      <div className="container mx-auto text-center">
       
        <h2 className="text-3xl font-bold text-gray-800 mb-8">FAQs & Support</h2>

        <div className="max-w-4xl mx-auto space-y-6">
         
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#126e82]">How do I apply for scholarships?</h3>
            <p className="text-gray-600 mt-4">
              You can search for scholarships using the search bar, and then apply directly through the application forms available on the scholarship page.
            </p>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#126e82]">When are the scholarship deadlines?</h3>
            <p className="text-gray-600 mt-4">
              Deadlines vary by scholarship. Be sure to check each scholarship's page for the exact deadline information.
            </p>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#126e82]">Can I apply to multiple scholarships?</h3>
            <p className="text-gray-600 mt-4">
              Yes, you can apply to as many scholarships as you qualify for. However, make sure to check each scholarship's specific eligibility criteria.
            </p>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#126e82]">How do I track my scholarship applications?</h3>
            <p className="text-gray-600 mt-4">
              You can track your applications through your personal dashboard, where you can see the status of each scholarship you have applied to.
            </p>
          </div>
        </div>

      
        <div className="mt-16 bg-white py-12 px-4 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-[#126e82] text-center mb-6">Need More Help?</h3>
          <p className="text-lg text-gray-600 text-center mb-8">
            If you have any more questions, feel free to reach out to our support team.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            <div className="flex items-center space-x-2 text-[#126e82]">
              <FaPhoneAlt className="text-xl text-[#126e82]" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-[#126e82]">
              <FaEnvelope className="text-xl" />
              <span className="text-lg">support@scholarshiptracker.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
            
        </div>
   
    );
};

export default FAQsAndSupport;