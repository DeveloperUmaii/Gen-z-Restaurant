import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm"; // আপনার আলাদা চেকআউট ফর্ম কম্পোনেন্ট
import SecTionTitle from "../../../Components/SecTionTitle";
import CheckOutForm from "./CheckOutForm";

// TODO: আপনার আসল পাবলিশেবল কি এখানে বসান
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10">
      {/* Heading */}
      <div className="mt-10">
        <SecTionTitle subHeading="Please Pay To Eat" heading="Payment" />
      </div>

      {/* Payment Form Container */}
      <div className="max-w-3xl mx-auto">
        {/* Stripe Elements Provider */}
        <Elements stripe={stripePromise}>
          {/* আপনি যদি স্ট্যাটিক ডিজাইন চান তবে নিচের এই অংশটুকু দেখতে পারেন */}
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
