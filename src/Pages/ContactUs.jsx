import SecTionTitle from "../Components/SecTionTitle";
import OurLocation from "./ContactUsComponents/OurLocation";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import hookAxiosLocal from "../hooks/hookAxiosLocal";
import Swal from "sweetalert2";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosLocal = hookAxiosLocal();
  const onSubmit = async (contactData) => {
    console.log(contactData);
    const contactRes = await axiosLocal.post("/contactUs", contactData);
    console.log(contactRes.data);
    if (contactRes.data.insertedId) {
      reset();
       Swal.fire({
         icon: "success",
         title: "Your Message Sent Successfully! 🚀",
         text: "Thank you for Contact with Us ❤️",
         timer: 2300,
         showConfirmButton: false,
         background: "#f8fafc",       // soft light background
         color: "#0f172a",            // dark text
         iconColor: "#22c55e",        // green icon
         padding: "2em",
         backdrop: `rgba(0,0,0,0.4)`
          });
         }
        };


  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
        <Helmet title="Gen-Z_R|Contact" />
        <OurLocation />
      {/* Header Section */}
       <div className="text-center mb-12">
           <SecTionTitle subHeading='Send Us a Message' heading='Contact Form'/>
       </div>
      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-[#F3F3F3] p-8 md:p-16 rounded-sm shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="input w-full rounded-md border-none focus:outline-none h-14 px-4 bg-white"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Email*
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="input w-full rounded-md border-none focus:outline-none h-14 px-4 bg-white"
              />
            </div>
          </div>

          {/* Phone Row */}
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Phone*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", { required: true })}
              className="input w-full rounded-md border-none focus:outline-none h-14 px-4 bg-white"
            />
          </div>

          {/* Message Details */}
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Message*
              </span>
            </label>
            <textarea
              {...register("message", { required: true })}
              className="textarea w-full rounded-md border-none focus:outline-none h-52 pt-4 px-4 bg-white"
              placeholder="Write your message here"></textarea>
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="mb-10">
            <div className="bg-white border border-gray-300 rounded-md p-4 inline-block shadow-sm">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded-none border-gray-400"
                  id="captcha"
                />
                <label
                  htmlFor="captcha"
                  className="text-sm font-medium text-gray-600">
                  I'm not a robot
                </label>
                <div className="ml-4 flex flex-col items-center">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="recaptcha"
                    className="w-8"
                  />
                  <span className="text-[8px] text-gray-500">reCAPTCHA</span>
                  <span className="text-[8px] text-gray-400 mt-[-2px]">
                    Privacy - Terms
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] hover:opacity-90 text-white border-none px-8 rounded-none normal-case text-lg font-medium flex items-center gap-2 h-14">
              Send Message <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
