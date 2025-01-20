import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

// Load Stripe public key
const stripePromise = loadStripe(`pk_test_51QjC8QFQO1mzBkRd4Qe5ryMuCdct1xnC3xIaEhBX6QsqcG6CzC4htRf2Sjf1C4qgJYHgGa6B2z9zpcfqmqY4CbrJ00CgLQ4BSJ`);
console.log(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(stripePromise);

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const { amount } = location.state || {};

  return (
    <div className="payment-container">
      <h2 className="text-center text-2xl font-bold my-4">Make a Payment</h2>
      <div className="card w-full max-w-md mx-auto p-4 shadow-lg">
        {amount ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm id={id} amount={amount} />
          </Elements>
        ) : (
          <p className="text-center text-red-500">Payment amount is missing!</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
