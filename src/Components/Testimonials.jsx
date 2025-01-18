import { Link } from 'react-router';
import card1 from '../assets/images/test-1.jpg'
import card2 from '../assets/images/test-2.jpg'
import card3 from '../assets/images/test-3.jpg'

const Testimonials = () => {
    return (
        <div>
             <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10">
          Scholar Community & Testimonials
        </h2>

       
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Join Our Scholar Community
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Join our vibrant Scholar Community to connect with like-minded individuals, share experiences, and gain valuable insights. Access exclusive resources, mentorship opportunities, and collaborative projects. Together, we inspire and empower each other to achieve academic success and beyond. Start your journey of growth and support—become a part of our community today
          </p>
          <div className="text-center">
            <Link to="join-conversation">
            <button className="px-6 py-3 bg-[#126e82] text-white font-bold rounded-md  hover:bg-[#126e82] ">
              Join the Conversation
            </button>
            </Link>
          </div>
        </div>

        

       
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            What Our Scholars Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-[#CEE6F2] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={card1}
                  alt=""
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-[#126e82]">John Doe</h4>
                  <p className="text-sm text-gray-600">Harvard Scholar</p>
                </div>
              </div>
              <p className="text-gray-700">
                The ScholarBridge community gave me invaluable support and advice. It feels amazing to connect with people who share the same goals.
              </p>
            </div>

           
            <div className="bg-[#CEE6F2] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={card2}
                  alt="Jane Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-[#126e82]">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Germany Scholar</p>
                </div>
              </div>
              <p className="text-gray-700">
                I found my dream scholarship through ScholarBridge and connected with amazing people who supported me every step of the way.
              </p>
            </div>

           
            <div className="bg-[#CEE6F2] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={card3}
                  alt="Ali Khan"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-[#126e82]">Ali Khan</h4>
                  <p className="text-sm text-gray-600">Canada Scholar</p>
                </div>
              </div>
              <p className="text-gray-700">
                Being part of this community motivated me to aim higher and achieve my scholarship goals. Highly recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Testimonials;
