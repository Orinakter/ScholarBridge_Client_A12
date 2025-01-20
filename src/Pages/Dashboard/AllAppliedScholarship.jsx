import { FcCancel } from "react-icons/fc";
import Loading from "../../Components/Loading";
import useAllAppliedScholarship from "../../hooks/useAllAppliedScholarship";
import { TbListDetails } from "react-icons/tb";
import { MdFeedback } from "react-icons/md";

const AllAppliedScholarship = () => {
  const { appliedScholarships, isScholarshipLoading } =
    useAllAppliedScholarship();
  console.log(appliedScholarships);
  if (isScholarshipLoading) return <Loading />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>University Name</th>
              <th>Applicant Email</th>
              <th>Applied Status</th>
              <th>Actions</th>
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
                          src={item.universityImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <th className="space-x-2">
                  <button className="btn text-lg tooltip" data-tip="Details">
                    <TbListDetails />{" "}
                  </button>
                  <button className="btn text-lg tooltip" data-tip="FeedBack">
                    <MdFeedback />{" "}
                  </button>
                  <button className="btn text-lg tooltip" data-tip="Cancel">
                    <FcCancel />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppliedScholarship;
