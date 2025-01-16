import { useContext } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
    const {user} = useContext(authorizedContext)
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 text-center">
        <img
          src={user.photourl}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto border-4 border-green-500"
        />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        {user.role && <p className="text-green-600 text-sm mt-2">{user.role}</p>}
        <div className="text-gray-600 text-sm mt-4 space-y-2">
          <p>Email: {user.email || "Not Provided"}</p>
          <p>Member Since: {user.memberSince || "N/A"}</p>
          <p>Location: {user.location || "Unknown"}</p>
        </div>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
        </div>
    );
};

export default MyProfile;