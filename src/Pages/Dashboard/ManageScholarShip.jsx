import useAllScholarship from "../../hooks/useAllScholarship";
import { CiEdit } from "react-icons/ci";
import { TbListDetails, TbCancel } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ManageScholarShip = () => {
  const { allScholarship, refetch } = useAllScholarship();
  const axiosSecure = useAxiosSecure();
  console.log(allScholarship);

  const handleEdit = (item) => {};

  const handleDelete = (item) => {
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
        const res = await axiosSecure.delete(`/scholarBridge/${item._id}`);
        if (res.data.deletedCount === 1) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
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
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Subject Category</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allScholarship.map((item, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{item.scholarshipName}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.universityImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.universityName}</div>
                    </div>
                  </div>
                </td>
                <td>{item.subjectCategory}</td>
                <td>{item.degree}</td>
                <td>{item.applicationFees}</td>
                <td className="space-x-4">
                  <button className="btn">
                    <TbListDetails />
                  </button>
                  <button onClick={() => handleEdit(item)} className="btn">
                    <CiEdit />
                  </button>
                  <button onClick={() => handleDelete(item)} className="btn">
                    <TbCancel />
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

export default ManageScholarShip;
