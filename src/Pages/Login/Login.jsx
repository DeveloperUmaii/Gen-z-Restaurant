import loginPageThemeImage from "../../assets/Login/loginpageTheme1.jpg";
import React, { useState } from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h6 className="text-center text-lg font-semibold mt-4">Log IN Please</h6>

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
                  className="absolute right-3 top-[55%] transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition duration-200"
                >
                  {showPassword ? (
                    // Eye Open Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    // Eye Closed Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye-off"
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
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                  <div className="bg-gray-200 text-gray-800 font-serif font-bold text-2xl px-4 py-2 tracking-widest border border-gray-300 rounded select-none w-32 text-center">
                    UAgIuo
                  </div>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800 link-hover"
                  >
                    Reload Captcha
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Type the captcha"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="btn w-full bg-[#d1b48b] text-[#5c3c0a] border-[#d1b48b] hover:bg-[#c9a77a]"
                >
                  Sign In
                </button>
              </div>

              {/* Create Account */}
              <div className="text-center text-sm mb-4">
                New here?{" "}
                <a
                  href="#"
                  className="font-semibold text-amber-600 hover:text-amber-700 link-hover"
                >
                  Create a New Account
                </a>
              </div>

              {/* Divider */}
              <div className="divider text-gray-400 text-sm my-6">
                Or sign in with
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                {/* Facebook */}
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.657 9.178 8.44 9.947v-7.042H7.957V12h2.483V9.663c0-2.454 1.488-3.834 3.714-3.834 1.056 0 2.14.188 2.14.188V7.91h-1.085c-1.272 0-1.666.793-1.666 1.62v1.928h2.394l-.382 2.905h-2.012V22c4.783-.769 8.44-4.931 8.44-9.947C22 6.477 17.523 2 12 2z"></path>
                  </svg>
                </button>

                {/* Google */}
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-red-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.5C14.17 2.5 15.86 3.33 17.07 4.48L20.45 1.25C18.41-.56 15.69-.5 12-.5 5.88 1 1.5 6 1.5 12c0 6 4.38 11 10.5 11.5C18.12 23 22.5 18 22.5 12c0-.76-.1-1.48-.29-2.16H12v4h6.01c-.25 1.41-.98 2.64-2.07 3.53l3.52 2.7C17.35 21.85 14.81 22.85 12 22.85 5.46 22.85.15 17.65.15 11.3.15 4.95 5.46-.25 12-.25c3.69 0 6.41-.25 8.45 1.25L17.07 4.48C15.86 3.33 14.17 2.5 12 2.5z"></path>
                  </svg>
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-gray-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.17 6.84 9.54.5.09.68-.22.68-.48 0-.24-.01-.87-.02-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.9.83.09-.64.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.85-.22 1.7-.33 2.5-.33s1.65.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.69-4.56 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.68.48C19.14 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
