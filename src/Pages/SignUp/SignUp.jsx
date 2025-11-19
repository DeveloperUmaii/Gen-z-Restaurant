import signUpPageThemeImage from "../../assets/Login/loginpageTheme1.jpg";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/Authprovider";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import hookAxiosLocal from "../../hooks/hookAxiosLocal";

const SignUp = () => {
  const { registrationUser, setUser, profileUpdate } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [photoUrlError, setPhotoUrlError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const backEndServerLinkLocal = hookAxiosLocal();

  // ✅ Signup Handler
  const handleSignUp = (e) => {
    e.preventDefault();
    // handleSignUp এর শুরুতে
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPhotoUrlError("");

    const form = e.target;
    const name = form.name.value.trim();
    const photoUrl = form.photoUrl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    console.log(form, name, photoUrl, email, password,)

    let valid = true;
    if (name.length < 4) {
      setNameError("নাম কমপক্ষে 4 অক্ষরের হতে হবে।");
      valid = false;
    }
    if (!photoUrl) {
      setPhotoUrlError("please input your photo url");
      valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("ইমেইল ঠিক নয়!");
      valid = false;
    }
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "পাসওয়ার্ডে থাকতে হবে: \n- কমপক্ষে ৬ অক্ষর \n- বড় হাতের অক্ষর \n- ছোট হাতের অক্ষর \n- সংখ্যা \n- বিশেষ চিহ্ন (@$!%*?&)"
      );
      valid = false;
    }
    //  (!valid) = (valid = false)
    //  (valid) = (valid = true)
    if (!valid) return; // ❌ একসাথে সব error দেখানো যাবে
    // ✅ Registration
    registrationUser(email, password)
      .then((result) => {
        const creatingUser = result.user;
        profileUpdate(name, photoUrl)
          .then(() => {

            userInfo = {
              name :name,
              email:email,
            }
            backEndServerLinkLocal.post('/users',userInfo )
             .then(res => {
                if(res.data.insertedId) {

                  console.log("user update");
                  reset();
                    setUser(creatingUser);
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Account Created Successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  console.log("✅ User created:", creatingUser);
                  navigate("/"); // Redirect on success

                }
             })


          })
          .catch((err) => {
            console.error("Profile update failed:", err.message);
          });

      })
      .catch((err) => {
        console.error("❌ Signup Error:", err.message);
        // setError("Signup failed: " + err.message);
      });
  };

  return (
    <div>
      <Helmet title="Gen-Z_R|SignUp" />
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

              {/* Error Message*************************************************** */}
              {nameError && (
                <p className="bg-red-100 text-red-700 p-3 mb-4 rounded border border-red-300">
                  {nameError}
                </p>
              )}

              {/* Photo Url */}
              <div>
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Type your photoUrl"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Error Message*************************************************** */}
              {photoUrlError && (
                <p className="bg-red-100 text-red-700 p-3 mb-4 rounded border border-red-300">
                  {photoUrlError}
                </p>
              )}

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

              {/* Error Message*************************************************** */}
              {emailError && (
                <p className="bg-red-100 text-red-700 p-3 mb-4 rounded border border-red-300">
                  {emailError}
                </p>
              )}

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
                  className=" absolute right-3 top-[68%] transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
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
                      className="feather feather-eye "
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
                      className="feather feather-eye-off "
                    >
                      <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a21.12 21.12 0 0 1 5.06-5.94" />
                      <path d="M1 1l22 22" />
                      <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                    </svg>
                  )}
                </span>
              </div>

              {/* Error Message*************************************************** */}
              {passwordError && (
                <p className="bg-red-100 text-red-700 p-3 mb-4 rounded border border-red-300">
                  {passwordError}
                </p>
              )}

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
              <div className="divider text-gray-400 text-sm my-4">
                Or sign in with
              </div>

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
