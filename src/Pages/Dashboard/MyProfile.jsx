import { useContext, useState } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(authorizedContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: user?.name || "",
    image: user?.image || "https://via.placeholder.com/150",
  });
  console.log(user);

  // Mock updateProfile function (replace this with actual API call)
  const updateProfile = async (name, image) => {
    try {
      // Simulate an API call to update the user's profile
      console.log("Updating profile with:", { name, image });
      // Example API call (uncomment and modify as needed):
      // await axios.put('/api/profile/update', { name, image });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(updatedProfile.name, updatedProfile.image);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* User Image */}
          {isEditing ? (
            <input
              type="text"
              name="image"
              value={updatedProfile.image}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 text-sm text-gray-700 border border-gray-300 rounded-md"
              placeholder="Paste image URL here"
            />
          ) : (
            <img
              src={updatedProfile.image}
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md"
            />
          )}

          {/* User Name */}
          {!isEditing ? (
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {updatedProfile.name || "John Doe"}
            </h2>
          ) : (
            <input
              type="text"
              name="name"
              value={updatedProfile.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 text-sm text-gray-700 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          )}
        </div>

        {/* User Email */}
        <div className="mt-6">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-500 font-medium">Email:</span>
            <span className="text-gray-700">{user?.email || "example@email.com"}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 focus:outline-none"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
