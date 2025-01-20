import { useEffect, useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import "./CheckoutForm.css"; // Add this to customize Stripe form styles

const CheckoutForm = ({ id, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(authorizedContext);
  //   console.log(user);
  const axiosSecure = useAxiosSecure();

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");

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

  const handleSubmit = async (e) => {
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
        date: new Date(), // utc date convert. use moment js to
        id: id,
        status: "pending",
      };
      const res = await axiosSecure.post("/payments", payment);
      console.log("payment saved", res.data);
      if (res.data?.paymentResult?.insertedId) {
        Swal.fire(
          "Payment Successful",
          "Thank you for your payment!",
          "success"
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        className="btn btn-primary mt-4"
      >
        Pay ${amount}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {transactionId && (
        <p className="text-green-500 mt-2">Transaction ID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
