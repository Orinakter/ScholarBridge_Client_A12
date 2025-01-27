import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

const TopScholarShip = () => {
  const navigate = useNavigate();
  
  

  // Fetch data using React Query
  const {
    isLoading,
    isError,
    data: scholarshipData = [],
    error,
  } = useQuery({
    queryKey: ["scholarshipData"],
    queryFn: () =>
      axios.get(`https://scholar-bridge-server-side.vercel.app/topScholarship`).then((res) => res.data),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-10">Top Scholarships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarshipData.map((item) => (
          <div key={item?._id} className="border-2 p-8 rounded-xl">
            <img
              src={item?.universityImage}
              alt={`${item?.universityName} Logo`}
              className="w-full h-[250px] rounded-xl"
            />

            <h2 className="mt-4">
              <span className="text-[#126e82] font-semibold">
                University Name:
              </span>
              {item?.universityName}
            </h2>
            <p>
              <span className="text-[#126e82] font-semibold">
                Scholarship Category:
              </span>
              {item?.scholarshipCategory}
            </p>
            <p>
              <span className="text-[#126e82] font-semibold">Country:</span>
              {item?.universityCountry}
            </p>
            <p>
              <span className="text-[#126e82] font-semibold">
                Application Deadline:
              </span>
              {item?.ApplicationDeadline}
            </p>
            <p>
              <span className="text-[#126e82] font-semibold">
                Subject Category:
              </span>
              {item?.subjectCategory}
            </p>
            <p>
              <span className="text-[#126e82] font-semibold">
                Application Fees:
              </span>
              {item?.applicationFees}
            </p>

            <div className="mx-auto text-center mt-4">
              <button
                className="btn bg-[#126e82] text-white font-bold"
                onClick={() => navigate(`/scholarship-details/${item?._id}`)}
              >
                Scholarship Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScholarShip;
