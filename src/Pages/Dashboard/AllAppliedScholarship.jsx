import Heading from "../../Components/Heading";
import useAllAppliedScholarship from "../../hooks/useAllAppliedScholarship";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router";
const AllAppliedScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const { appliedScholarships, isScholarshipLoading, refetch } =
    useAllAppliedScholarship();
  console.log(appliedScholarships);

  const manageStatus = async (id) => {
    const res = await axiosSecure.patch(`/scholarship-apply/${id}`);
    if (res.data.modifiedCount) {
      refetch();
      toast.success("Application approve");
    }
  };
  return (
    <div>
      <Heading heading="All Applied Scholarship" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>University Name</th>
              <th>Scholarship Name</th>
              <th>Application Fee</th>
              <th>Application Status</th>
              <th>Status Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appliedScholarships.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.userPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.userEmail}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>
                  {item.paymentStatus === true && (
                    <span className="bg-green-400 px-2 py-1 rounded-lg text-white">
                      Paid
                    </span>
                  )}
                </td>
                <td>{item.status}</td>
                <td>
                  {item.status === "Approve" ? (<>
                  {
                    item.review ? <button disabled className="btn">Review</button>: <Link
                    to={`/dashboard/add-review/${item._id}`}
                    className="btn"
                  >
                    Review
                  </Link>
                  }
                  </>
                    
                  ) : (
                    <button
                      onClick={() => manageStatus(item._id)}
                      className="btn text-xl text-green-500"
                    >
                      <IoCheckmarkDoneCircle />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppliedScholarship;
