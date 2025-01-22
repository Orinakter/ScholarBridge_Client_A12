import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: reviews = [], isLoading, isError } = useQuery({
    queryKey: ["review", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/review/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="text-center mt-10">Loading reviews...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error fetching reviews. Please try again later.
      </div>
    );
  }
console.log(reviews);
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        Manage Your Reviews
      </h2>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">
          No reviews found. Start adding your reviews!
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="p-4 border border-gray-200 rounded-md shadow-sm"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.reviewerImg}
                  alt={review.reviewerName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium">{review.reviewerName}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{review.review}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-semibold">
                  Rating: {review.rating} ⭐
                </span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageReview;
