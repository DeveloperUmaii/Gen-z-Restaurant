import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement,} from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import hookAxiosSecure from "../../../hooks/hookAxiosSecure";
import hookUseCart from "../../../hooks/hookUseCart";
import UseAuthHook from "../../../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const [transactionId, setTransactionid] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = hookAxiosSecure();
  const { user } = UseAuthHook();
  const [cart] = hookUseCart(); // ✅ (পরিবর্তন করা লাইন)
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  //Calculate total price
  //acc বা accumulator বা 0 ধরে নেওয়া বা প্রিভিয়াস ভ্যালু;
  //item= বর্তমান ভ্যালু বা cart থেকে পাওয়া ভ্যালু(10,50,23 etc) বা ইন্সার্ট করা ভ্যালু বা ইনপুট দেওয়া ভ্যালু বা  ভ্যালু পাইলাম সেইটা
  //const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        // console.log(res.data.clientSecret);
        const clientSecret = res.data.clientSecret
        setClientSecret(clientSecret)
        // setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardNumber = elements.getElement(CardNumberElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumber, // এখানে split element-এর ক্ষেত্রে cardNumber দিলেই হয়
    });

    if (error) {
      // console.log("[error]", error);
      setErr(error?.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setErr("");
    }

    const card = elements.getElement(CardNumberElement);
    const { paymentIntent, error: paymentErr } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous@",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (paymentErr) {
     // console.log("PayMent Error", paymentErr);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // console.log("TransectionID", paymentIntent.id);
      setTransactionid(paymentIntent.id);

        const  payment = {
              email: user.email,
              name: user.displayName,
              price: totalPrice,
              date: new Date(),
              transactionId: paymentIntent.id,
              cartIds: cart.map(item => item._id),
              menuIds: cart.map(item => item.menuId),
              status: 'pending'
            }
      const res = await axiosSecure.post('/payments', payment);
      
      console.log('PAYMENT CLIENT SIDE POST CONSOLE', res.data)


      Swal.fire({
        icon: "success",
        title: "Payment Successful!",
        html: `<small>Transaction ID:</small><br/><b>${paymentIntent.id}</b>`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  // Stripe এলিমেন্টের জন্য কমন স্টাইল
  const elementOptions = {
    style: {
      base: {
        fontSize: "18px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card Number Input */}
          <div className="form-control w-full relative">
            <div className="input input-bordered w-full h-14 pl-12 flex items-center rounded-md border border-[#00000038]">
              <CardNumberElement options={elementOptions} className="w-full" />
            </div>
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

          {/* Expiry and CVC Input (Combined in one row per your screenshot) */}
          <div className="form-control w-full flex flex-row gap-2 input input-bordered h-14 items-center rounded-md border border-[#00000038] px-4">
            <CardExpiryElement options={elementOptions} className="w-1/2" />
            <div className="divider divider-horizontal text-[#00000038] '''mx-0">
              |
            </div>
            <CardCvcElement options={elementOptions} className="w-1/2" />
          </div>
        </div>

        {/* Pay Button */}
        <div className="flex  justify-center mt-10">
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn bg-[#570DF8] hover:bg-[#4506cb] text-white w-full md:w-80 border-none rounded-md normal-case  h-11">
            <span className=" text-xl font-bold pl-2 pb-2">Pay</span> $
            {totalPrice.toFixed(2)}
          </button>

          {err && <p className="text-red-500">{err}</p>}

          {transactionId && (
            <p className="text-green-600">
              ✅ Payment Successful <br />
              Transaction ID: {transactionId}
            </p>
          )}
          <p className=" pl-3 text-red-500 ">{err}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
