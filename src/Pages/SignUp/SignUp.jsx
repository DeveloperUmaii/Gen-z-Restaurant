import signUpPageThemeImage from "../../assets/Login/loginpageTheme1.jpg";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useNavigate } from "react-router-dom"; // ✅ navigate যোগ করা হয়েছে সফল signup এর পরে redirect করার জন্য

const SignUp = () => {
  const { registrationUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ navigate hook

  // ✅ Signup Function
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value; // ✅ name value নেয়া হয়েছে
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      alert("Password কমপক্ষে ৬ অক্ষরের হতে হবে!");
      return;
    }

    // ✅ নতুন ইউজার রেজিস্ট্রেশন
    registrationUser(email, password)
      .then((result) => {
        const creatingUser = result.user;
        setUser(creatingUser);
        console.log("✅ User created:", creatingUser);
        navigate("/"); // ✅ সফল হলে হোমে নিয়ে যাবে
      })
      .catch((error) => {
        console.error("❌ Signup Error:", error.message);
        alert("Signup failed: " + error.message);
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
          {/* ✅ Left Side */}
          <div className="lg:w-1/2 p-8 sm:p-12 relative">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Sign Up
            </h1>

            <form onSubmit={handleSignUp}>
              {/* ✅ Name */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                {/* ❌ আগের ভুল: {...register("name", { required: true })} */}
                {/* ✅ ঠিক করা হয়েছে: শুধু input field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* ✅ Email */}
              <div className="mb-4">
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

              {/* ✅ Password */}
              <div className="mb-4 relative">
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
                    // ✅ Eye Open Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="27"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    // ✅ Eye Closed Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
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

              {/* ✅ Submit Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="btn w-full bg-[#d1b48b] text-[#5c3c0a] border-[#d1b48b] hover:bg-[#aa8d67]"
                >
                  Sign Up
                </button>
              </div>

              {/* ✅ Go to Login */}
              <div className="text-center text-sm mb-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-amber-600 hover:text-amber-700 link-hover"
                >
                  Go to Login
                </Link>
              </div>

              <div className="divider text-gray-400 text-sm my-6">
                Or sign in with
              </div>

              {/* ✅ Social Icons */}
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

          {/* ✅ Right Side Image */}
          <div className="lg:w-1/2 p-10 flex items-center justify-center bg-gray-50 border-r border-gray-100">
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
