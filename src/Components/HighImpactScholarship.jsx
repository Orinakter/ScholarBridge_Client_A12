import React from "react";

const HighImpactScholarship = () => {
  return (
    <div>
      <section className="my-12 px-4 py-8 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Top University
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/zTg4JchF/pexels-pixabay-207684-2.jpg"
              alt="Scholarship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Full Scholarship in Engineering
              </h3>
              <p className="text-sm text-gray-500 mb-2">Harvard University</p>
              <p className="text-sm text-gray-500 mb-4">USA</p>
              <p className="text-sm text-gray-500">Deadline: March 15, 2025</p>
              <div className="flex items-center my-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < 4 ? "text-yellow-500" : "text-gray-300"
                    } text-xl`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                The best opportunity for engineering students...
              </p>
            </div>
          </div>

          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/6cM7kcxy/pexels-beyza-deveci-2148286956-30661725.jpg"
              alt="Scholarship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Partial Scholarship for Medical Students
              </h3>
              <p className="text-sm text-gray-500 mb-2">University of Oxford</p>
              <p className="text-sm text-gray-500 mb-4">UK</p>
              <p className="text-sm text-gray-500">Deadline: April 10, 2025</p>
              <div className="flex items-center my-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < 5 ? "text-yellow-500" : "text-gray-300"
                    } text-xl`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Perfect scholarship for future doctors.
              </p>
            </div>
          </div>

          {/* Scholarship Card 3 */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/cKKfMCr4/pexels-nishess-shakya-401526881-23856636.jpg"
              alt="Scholarship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Full Scholarship in Arts
              </h3>
              <p className="text-sm text-gray-500 mb-2">University of Sydney</p>
              <p className="text-sm text-gray-500 mb-4">Australia</p>
              <p className="text-sm text-gray-500">Deadline: June 1, 2025</p>
              <div className="flex items-center my-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < 3 ? "text-yellow-500" : "text-gray-300"
                    } text-xl`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                A prestigious scholarship for aspiring artists.
              </p>
            </div>
          </div>

          {/* Scholarship Card 4 */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/C5KW6bqn/pexels-teju-215592370-30753919.jpg"
              alt="Scholarship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                STEM Scholarship for Women
              </h3>
              <p className="text-sm text-gray-500 mb-2">Global University</p>
              <p className="text-sm text-gray-500 mb-4">Canada</p>
              <p className="text-sm text-gray-500">Deadline: May 20, 2025</p>
              <div className="flex items-center my-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < 4 ? "text-yellow-500" : "text-gray-300"
                    } text-xl`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Empowering women in STEM fields with scholarships.
              </p>
            </div>
          </div>

          {/* Scholarship Card 5 */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/tMH1NvBQ/pexels-ludodelot-15438553.jpg"
              alt="Scholarship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Entrepreneurship Scholarship
              </h3>
              <p className="text-sm text-gray-500 mb-2">Innovate University</p>
              <p className="text-sm text-gray-500 mb-4">Singapore</p>
              <p className="text-sm text-gray-500">Deadline: July 5, 2025</p>
              <div className="flex items-center my-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < 3 ? "text-yellow-500" : "text-gray-300"
                    } text-xl`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                A great opportunity for aspiring entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighImpactScholarship;
