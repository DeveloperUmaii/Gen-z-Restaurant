import signUpPageThemeImage from "../../assets/Login/loginpageTheme1.jpg";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { registrationUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Signup Handler
  const handleSignUp = (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Name validation
    if (name.length < 2) {
      setError("নাম কমপক্ষে ২ অক্ষরের হতে হবে।");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("ইমেইল ঠিক নয়! অবশ্যই @ এবং . থাকতে হবে।");
      return;
    }

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "পাসওয়ার্ডে থাকতে হবে: \n- কমপক্ষে ৬ অক্ষর \n- বড় হাতের অক্ষর \n- ছোট হাতের অক্ষর \n- সংখ্যা \n- বিশেষ চিহ্ন (@$!%*?&)"
      );
      return;
    }

    // ✅ Registration
    registrationUser(email, password)
      .then((result) => {
        const creatingUser = result.user;
        setUser(creatingUser);
        console.log("✅ User created:", creatingUser);
        navigate("/"); // Redirect on success
      })
      .catch((err) => {
        console.error("❌ Signup Error:", err.message);
        setError("Signup failed: " + err.message);
      });
  };

  return (
    <div>
      <h6 className="text-center text-lg font-semibold mt-24">
        Sign Up Please
      </h6>

      <div
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-100"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' stroke='#e5e7eb' stroke-width='1' stroke-opacity='0.6'><path d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30 M-10 30 L10 50 M30 -10 L50 10'/></svg>")`,
        }}
      >
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full">

          {/* Left Side Form */}
          <div className="lg:w-1/2 p-8 sm:p-12 relative">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Sign Up
            </h1>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 mb-4 rounded border border-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="btn w-full bg-[#d1b48b] text-[#5c3c0a] border-[#d1b48b] hover:bg-[#aa8d67]"
                >
                  Sign Up
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-amber-600 hover:text-amber-700 link-hover"
                >
                  Go to Login
                </Link>
              </div>

              {/* Divider */}
              <div className="divider text-gray-400 text-sm my-4">Or sign in with</div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-blue-600"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-red-600"
                >
                  <i className="fa-brands fa-google"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-gray-800"
                >
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 p-10 flex items-center justify-center bg-gray-50 border-l border-gray-100">
            <div className="w-full max-w-sm text-center">
              <img
                src={signUpPageThemeImage}
                alt="Sign Up Illustration"
                className="w-full h-auto object-contain hidden md:block mx-auto"
              />
              <p className="text-center text-gray-500 mt-4 md:mt-0">
                আপনার প্রিয় খাবারের অভিজ্ঞতা শুরু করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
