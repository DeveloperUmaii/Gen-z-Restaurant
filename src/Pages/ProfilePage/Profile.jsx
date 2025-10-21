import React, { useContext } from "react";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const {user} = UseAuthHook()
  const { displayName, email, photoURL, uid } = user || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
              <Helmet title="Gen-Z_R|Profile" />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>

        {/* Profile Photo */}
        <img
          src={photoURL || "https://i.ibb.co.com/7WymN6V/default-user.png"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 mb-4 object-cover"
        />

        {/* Display Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          {displayName || "No Name Found"}
        </h2>

        {/* Email */}
        <p className="text-gray-600 mt-2">
          {email || "No Email Provided"}
        </p>

        {/* UID */}
        <p className="text-gray-400 text-sm mt-2">
          UID: {uid || "N/A"}
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-3">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Refresh
          </button>
          <button
            onClick={() => alert("Edit profile coming soon...")}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
