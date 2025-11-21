import loginPageThemeImage from "../../assets/Login/loginpageTheme1.jpg";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
// capcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import SocialLogIn from "./SocialLogIn/SocialLogIn";


const Login = () => {
  const { logInUser, googlelogIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true); // submit button
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleCaptchaVerify = () => {
    const captchaValue = captchaRef.current.value.trim();

    if (!captchaValue) {
      Swal.fire({
        title: "Warning!",
        text: "Please enter the captcha first!",
        icon: "warning",
        confirmButtonColor: "#d1b48b",
      });
      return;
    }

    if (validateCaptcha(captchaValue)) {
      Swal.fire({
        title: "Captcha Matched!",
        text: "You can now submit the form.",
        icon: "success",
        confirmButtonColor: "#5cb85c",
      });
      setDisable(false); // Enable Submit
    } else {
      Swal.fire({
        title: "Captcha Does Not Match!",
        text: "Please try again.",
        icon: "error",
        confirmButtonColor: "#d9534f",
      });
      setDisable(true); // Disable Submit
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (disable) return; // যদি captcha match না হয়, login চলবে না

    //R যদি captcha match হয়, login চলবে
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password).then((result) => {
      const user = result.user;
Swal.fire({
  position: "top-end",
  icon: "success", 
  title: "Login Successful.",
  showConfirmButton: false,
  timer: 3000,
  iconColor: "#01ff22",
  customClass: {
    popup: "rounded-xl p-2", 
    title: "text-[#01ff22] font-semibold" 
  }
});
      navigate(redirectPath, { replace: true });
      console.log(user);
      console.log(location);
    });
  };

  return (
    <div>
      <Helmet title="Gen-Z_R|Log in" />
      <h6 className=" text-center text-lg font-semibold mt-4">Log IN Please</h6>

      <div
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-100"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' stroke='#e5e7eb' stroke-width='1' stroke-opacity='0.6'><path d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30 M-10 30 L10 50 M30 -10 L50 10'/></svg>")`,
        }}
      >
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full">
          {/* Left Side */}
          <div className="lg:w-1/2 p-10 flex items-center justify-center bg-gray-50 border-r border-gray-100">
            <div className="w-full max-w-sm text-center">
              <img
                src={loginPageThemeImage}
                alt="Login Illustration"
                className="w-full h-auto object-contain hidden md:block mx-auto"
              />
              <p className="text-center text-gray-500 mt-4 md:mt-0">
                আপনার প্রিয় খাবারের অভিজ্ঞতা শুরু করুন।
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 p-8 sm:p-12 relative">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Login
            </h1>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                />

                {/* Show/Hide Button */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className=" w-7  absolute right-3 top-[50%] transform  cursor-pointer text-gray-500 hover:text-gray-700 "
                >
                  {showPassword ? (
                    // Eye Open Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="27"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye "
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    // Eye Closed Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye-off "
                    >
                      <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a21.12 21.12 0 0 1 5.06-5.94" />
                      <path d="M1 1l22 22" />
                      <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                    </svg>
                  )}
                </span>
              </div>

              {/* Captcha */}
              <div className="mb-6">
                <LoadCanvasTemplate />
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Type the captcha"
                    className="input input-bordered w-full"
                  />
                  <button
                    onClick={handleCaptchaVerify}
                    type="button" // ✅ পূর্বে ছিল type="submit", এখন ঠিক করা হলো
                    className="btn btn-neutral btn-dash w-24"
                  >
                    Verify
                  </button>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={disable}
                  className=" btn w-full bg-[#d1b48b] text-[#5c3c0a] border-[#d1b48b] hover:bg-[#aa8d67]"
                >
                  Sign In
                </button>
              </div>

              {/* Create Account */}
              <div className="text-center text-sm mb-4">
                New here?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-amber-600 hover:text-amber-700 link-hover"
                >
                  Create a New Account
                </Link>
              </div>

              {/* Divider */}
              <div className="divider text-gray-400 text-sm my-6">
                Or sign in with
              </div>

              {/* Social Icons */}

              <SocialLogIn />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
