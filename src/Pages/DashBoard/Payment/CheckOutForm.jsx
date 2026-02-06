import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardNumber = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumber, // এখানে split element-এর ক্ষেত্রে cardNumber দিলেই হয়
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    // Stripe এলিমেন্টের জন্য কমন স্টাইল
    const elementOptions = {
        style: {
            base: {
                fontSize: '18px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </span>
                    </div>

                    {/* Expiry and CVC Input (Combined in one row per your screenshot) */}
                    <div className="form-control w-full flex flex-row gap-2 input input-bordered h-14 items-center rounded-md border border-[#00000038] px-4">
                        <CardExpiryElement options={elementOptions} className="w-1/2" />
                        <div className="divider divider-horizontal mx-0">|</div>
                        <CardCvcElement options={elementOptions} className="w-1/2" />
                    </div>
                </div>

                {/* Pay Button */}
                <div className="flex justify-center mt-10">
                    <button
                        type="submit"
                        disabled={!stripe}
                        className="btn bg-[#570DF8] hover:bg-[#4506cb] text-white w-full md:w-80 border-none rounded-md normal-case text-lg h-14">
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;