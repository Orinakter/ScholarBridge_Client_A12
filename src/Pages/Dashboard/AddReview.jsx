import { useParams } from "react-router";
import Heading from "../../Components/Heading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddReview = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const reviewerName = user?.displayName || "Anonymous User";
  const reviewerImg = user?.photoURL || "https://via.placeholder.com/150";
  const reviewerEmail= user?.email

  const handleReview = async (e) => {
    e.preventDefault();
    const review = e.target.review.value.trim();
    const rating = e.target.rating.value;

    if (!review || !rating) {
      alert("Please provide both a review and a rating.");
      return;
    }

    const reviewData = {
      scholarshipId: id,
      reviewerName,
      reviewerImg,
      review,
      reviewerEmail,
      rating: parseInt(rating),
      date: new Date().toISOString(),
    };

    try {
      const response = await axiosSecure.patch(`/review/${id}`, reviewData);
      if (response.data) {
        toast.success("Review added successfully!");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
    console.log(reviewData);
  };

  return (
    <div className="max-w-lg mx-auto relative mt-24 p-6 bg-white shadow-lg rounded-lg">
      <Heading heading="Add Review" />
      <div className="absolute -top-5 -left-10">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
          src={reviewerImg}
          alt={reviewerName}
        />
      </div>
      <h3 className="text-center text-lg font-semibold mt-12">
        {reviewerName}
      </h3>
      <form onSubmit={handleReview} className="mt-6 space-y-4">
        {/* Review Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Review
          </label>
          <textarea
            name="review"
            placeholder="Write your review here..."
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        {/* Rating Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Rating
          </label>
          <select
            name="rating"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
