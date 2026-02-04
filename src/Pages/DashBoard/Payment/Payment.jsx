import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm"; // আপনার আলাদা চেকআউট ফর্ম কম্পোনেন্ট
import SecTionTitle from "../../../Components/SecTionTitle";

// TODO: আপনার আসল পাবলিশেবল কি এখানে বসান
const stripePromise = loadStripe("your_publishable_key_here");

const Payment = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10">
      {/* Heading */}
      <div className="mt-10"><SecTionTitle subHeading="My Cart" heading="Payment" /></div>
      
      {/* Payment Form Container */}
      <div className="max-w-3xl mx-auto">
        {/* Stripe Elements Provider */}
        <Elements stripe={stripePromise}>
          {/* আপনি যদি স্ট্যাটিক ডিজাইন চান তবে নিচের এই অংশটুকু দেখতে পারেন */}
          <form className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Card Number Input */}
              <div className="form-control w-full relative">
                <input
                  type="text"
                  placeholder="Card number"
                  className="input input-bordered w-full h-14 pl-12 focus:outline-none rounded-md border-gray-200"
                />
                <span className="absolute left-4 top-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </span>
              </div>

              {/* Date/CVC Input */}
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="MM/YY/CVC"
                  className="input input-bordered w-full h-14 focus:outline-none rounded-md border-gray-200"
                />
              </div>
            </div>

            {/* Pay Button */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="btn bg-[#570DF8] hover:bg-[#4506cb] text-white w-full md:w-80 border-none rounded-md normal-case text-lg h-14">
                Pay
              </button>
            </div>
          </form>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
