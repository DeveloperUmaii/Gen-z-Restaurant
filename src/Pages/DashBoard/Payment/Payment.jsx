import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SecTionTitle from "../../../Components/SecTionTitle";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10">
              <Helmet title="Gen-Z_R|Payment" />
      <div className="mt-10">
        <SecTionTitle subHeading="Please Pay To Eat" heading="Payment" />
      </div>

      <div className="max-w-3xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
