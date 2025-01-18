import React from 'react';

const JoinConversation = () => {
    return (
        <div>
            <div className="bg-[#CEE6F2] min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#126e82] mb-8">
          Join the Conversation
        </h1>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Join the conversation and connect with a supportive community of scholars. Share your experiences, gain insights, and build meaningful connections. Together, we inspire and uplift each other to achieve academic and personal success. Start your journey today.
        </p>

        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-[#126e82] mb-4">Why Join?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Connect with scholars from around the world.</li>
            <li>Access exclusive resources and mentorship opportunities.</li>
            <li>Share your journey and inspire others.</li>
            <li>Collaborate on projects and initiatives.</li>
          </ul>
        </div>

       
        {/* <div className="text-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-700 transition-all">
            Join Now
          </button>
        </div> */}

       
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Community Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Global Connections</h3>
              <p className="text-gray-700">
                Meet scholars from diverse backgrounds and cultures to broaden your perspective.
              </p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Exclusive Resources</h3>
              <p className="text-gray-700">
                Gain access to resources tailored to your scholarship and academic journey.
              </p>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Mentorship Opportunities</h3>
              <p className="text-gray-700">
                Learn from experienced mentors who are here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>

       
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Hear from Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Joining this community was the best decision I ever made. I've learned so much and made lifelong connections!"
              </p>
              <h4 className="text-lg font-bold text-[#126e82] mt-4">- John Doe</h4>
            </div>

           
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "The mentorship and resources here are top-notch. It's helped me grow personally and academically."
              </p>
              <h4 className="text-lg font-bold text-[#126e82] mt-4">- Jane Smith</h4>
            </div>

           
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "I feel so inspired by the stories and achievements of others in this community. It keeps me motivated!"
              </p>
              <h4 className="text-lg font-bold text-[#126e82] mt-4">- Ali Khan</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
        </div>






    );
};

export default JoinConversation;