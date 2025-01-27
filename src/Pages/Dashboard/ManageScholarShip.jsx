import useAllScholarship from "../../hooks/useAllScholarship";
import { CiEdit } from "react-icons/ci";
import { TbListDetails, TbCancel } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Heading from "../../Components/Heading";
import { Link } from "react-router";
const ManageScholarShip = () => {
  const { allScholarship, refetch } = useAllScholarship();
  const axiosSecure = useAxiosSecure();
  



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
      <Heading heading="Manage ScholarShip"/>
      <div className="overflow-x-auto  p-4 rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#126e82] text-white font-bold">
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
              <tr key={item._id}>
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
                  <div className="flex items-center gap-3">
                  <Link to={`/dashboard/details/${item._id}`}>
                    <button className="btn text-lg text-blue-600"><TbListDetails /></button>
                  </Link>
                  <Link to={`/dashboard/edit-scholarship/${item._id}`} >
                    <button  className="btn text-lg text-green-600"><CiEdit /></button>
                  </Link>
                  <button onClick={() => handleDelete(item)} className="btn text-lg text-red-600">
                    <TbCancel />
                  </button>
                  </div>
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
