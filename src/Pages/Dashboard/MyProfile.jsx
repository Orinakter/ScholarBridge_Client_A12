import { useContext } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";



const MyProfile = () => {
  const {user} = useContext(authorizedContext)
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="flex flex-col items-center">
         
          <img
            src={user.image || "https://via.placeholder.com/150"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />

          
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {user.name || "John Doe"}
          </h2>

          
          {user.role && user.role !== "regular" && (
            <span className="mt-2 px-4 py-1 text-sm text-white bg-blue-600 rounded-full">
              {user.role}
            </span>
          )}
        </div>

       
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Email:</span>
            <span className="text-gray-700">{user.email || "example@email.com"}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Account Created:</span>
            <span className="text-gray-700">
              {user.createdAt || "2025-01-01"}
            </span>
          </div>
        </div>

       
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;