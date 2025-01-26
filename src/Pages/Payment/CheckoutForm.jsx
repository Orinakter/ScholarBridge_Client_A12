import { useEffect, useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useTopScholarship from "../../hooks/useTopScholarship";
import { toast } from "react-toastify";
import useSingleUser from "../../hooks/useSingleUser";

const CheckoutForm = ({ id, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(authorizedContext);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // New state to track payment success
  const { scholarShip } = useTopScholarship(id);
  const {userData} = useSingleUser()
  

  useEffect(() => {
    if (amount > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: amount })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.error("Error creating payment intent:", err));
    }
  }, [amount, axiosSecure]);

  const handleSubmitPayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error: methodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (methodError) {
      setError(methodError.message);
      return;
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user.email,
        price: amount,
        transactionId: paymentIntent.id,
        date: new Date(),
        id: id,
        status: "pending",
      };
      const res = await axiosSecure.post("/payments", payment);
      console.log("payment saved", res.data);

      if (res.data?.paymentResult?.insertedId) {
        setPaymentSuccessful(true); // Mark payment as successful
        Swal.fire(
          "Payment Successful",
          "Thank you for your payment!",
          "success"
        );
      }
    }
  };

  const date = new Date();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    data.name = user.displayName;
    data.userPhoto = user.photoURL;
    data.scholarshipID = id;
    data.date = date;
    data.paymentStatus = true;
    data.userEmail = user?.email;
    data.feedback = "pending";
    data.status = "pending";
    data.universityCity = scholarShip.universityCity;
    data.applicationFees = scholarShip.applicationFees;
    data.serviceCharge = scholarShip.serviceCharge;
    data.userId = userData.userId;

    const res = await axiosSecure.post("/scholarship-apply", data);
    if (res.data) {
      toast.success("Data insert");
      console.log(res.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitPayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn bg-[#126e82] text-white font-bold mt-4"
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {transactionId && (
          <p className="text-green-500 mt-2">Transaction ID: {transactionId}</p>
        )}
      </form>

      {/* Conditionally render the additional form after successful payment */}
      {paymentSuccessful && (
        <div className="mt-4 bg-[#CEE6F2] p-16">
          <h3 className="text-2xl font-semibold text-center text-[#126e82] py-3">
            Enter Your Details
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Phone */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">Phone Number</span>
              </div>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Photo */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">Photo</span>
              </div>
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Gender */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">Gender</span>
              </div>
              <select
                {...register("gender", { required: true })}
                className="input"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Address */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-tex text-[#126e82]t">Address</span>
              </div>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Degree */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">Degree</span>
              </div>
              <select
                {...register("degree", { required: true })}
                className="input"
              >
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Masters">Masters</option>
              </select>
            </label>
            {/* SSC */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">SSC Result</span>
              </div>
              <input
                {...register("sscResult", { required: true })}
                type="text"
                placeholder="SSC result"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* HSC */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">HSC Result</span>
              </div>
              <input
                {...register("hscResult", { required: true })}
                type="text"
                placeholder="HSC result"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* University Name */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">University Name</span>
              </div>
              <input
                {...register("universityName", { required: true })}
                defaultValue={scholarShip.universityName}
                readOnly
                type="text"
                placeholder="University Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Scholarship Category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82]">Scholarship Category </span>
              </div>
              <input
                {...register("scholarShipCategory", { required: true })}
                defaultValue={scholarShip.scholarshipCategory}
                readOnly
                type="text"
                placeholder="Scholarship Category "
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Subject Category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#126e82] ">Subject Category </span>
              </div>
              <input
                {...register("subjectCategory", { required: true })}
                defaultValue={scholarShip.subjectCategory}
                readOnly
                type="text"
                placeholder="Subject Category"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <div className="text-center mt-4">
            <button type="submit" className="btn bg-[#126e82] text-white font-bold mt-2">
              Submit
            </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
