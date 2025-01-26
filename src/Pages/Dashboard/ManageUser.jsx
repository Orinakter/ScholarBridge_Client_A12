import { FaTrash, FaUser } from "react-icons/fa";
import Loading from "../../Components/Loading";
import useAllUser from "../../hooks/useAllUser";
import { MdAdminPanelSettings, MdAddModerator } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUser = () => {
  const { users, isUsersLoading, refetch } = useAllUser();
  const axiosSecure = useAxiosSecure();
  
  if (isUsersLoading) return <Loading />;

 
  const handleRole = (user, userRole) => {
    const roleInfo = {
      userId: user._id,
      userRole,
    };
    
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Make ${userRole}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch("/user", roleInfo);
        refetch()
        if (res.data) {
          refetch();
          console.log(res.data);
          Swal.fire({
            title: `${user.name}`,
            text: ` Now ${userRole}`,
            icon: "success",
          });
        }
      }
    });
  };
  // Delete user by call this function
  const handleUserDelete = (user) => {
    const userId = user._id;
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/user/${userId}`);
        refetch()
        if (res.data.deletedCount === 1) {
          Swal.fire({
            title: ` Deleted!`,
            text: ` not able to access`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Manage Role</th>
              <th>Manage User</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="space-x-2">
                  {/* Role Change */}
                  <button
                    onClick={() => {
                      handleRole(user, "user");
                    }}
                    className="btn text-lg tooltip" data-tip='User'
                  >
                    <FaUser />
                  </button>
                  <button
                    onClick={() => {
                      handleRole(user, "admin");
                    }}
                    className="btn text-lg tooltip" data-tip='Admin'
                  >
                    <MdAdminPanelSettings />
                  </button>
                  <button
                    onClick={() => {
                      handleRole(user, "moderator");
                    }}
                    className="btn text-lg tooltip" data-tip='Moderator'
                  >
                    <MdAddModerator />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUserDelete(user)}
                    className="btn text-red-500 text-lg"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
