import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRocket } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import UseAuthHook from "../../../providers/ContexHook/UseAuthHook";
import hookAxiosLocal from "../../../hooks/hookAxiosLocal";
// import { useQuery } from '@tanstack/react-query';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuthHook();
  const axiosLocal = hookAxiosLocal();

  const onSubmit = async (data) => {
    const reviewData = {
      ...data,
      rating: rating,
      email: user.email,
    };
    console.log(reviewData);
    const reviewRespo = await axiosLocal.post("/reviews", reviewData);
    console.log(reviewRespo.data);
    if (reviewRespo.data.insertedId) {
      reset();
      Swal.fire({
        icon: "success",
        title: "Review Submitted 🎉",
        html: `
    <p style="font-size:16px; margin-top:5px;">
      Your review has been sent successfully 🚀
    </p>
  `,
        showConfirmButton: true,
        confirmButtonText: "Awesome!",
        timer: 3000,
        timerProgressBar: true,
        background: "#f0fdf4",
        color: "#166534",
        backdrop: `
    rgba(0,150,0,0.2)
    url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThjY2YxY2JhZDJhYzYwNmQ3ZTE5NDJkZjNjYzY5M2QyY2E1YzBkYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/111ebonMs90YLu/giphy.gif")
    left top
    no-repeat
  `,
        confirmButtonColor: "#22c55e",
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        },
      });
    }
  };

  return (
    <div className="w-full px-4 md:px-10 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-yellow-600 italic mb-2">
          ---Sharing is Caring!!!---
        </p>
        <h2 className="text-4xl uppercase border-y-4 py-3 inline-block px-10 font-medium">
          Give a Review...
        </h2>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-[#F3F3F3] p-10 md:p-20 rounded-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Rating Section */}
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl uppercase font-serif mb-4">Rate Us!</h3>
            <Rating
              style={{ maxWidth: 250 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>

          {/* Recipe liked most */}
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Which recipe you liked most?
              </span>
            </label>
            <input
              type="text"
              placeholder="Recipe you liked most"
              {...register("recipeName", { required: true })}
              className="input w-full rounded-md border-none focus:outline-none h-14 px-4"
            />
          </div>

          {/* Suggestions */}
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Do you have any suggestion for us?
              </span>
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              {...register("suggestion", { required: true })}
              className="input w-full rounded-md border-none focus:outline-none h-14 px-4"
            />
          </div>

          {/* Review Details */}
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Kindly express your care in a short way.
              </span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea w-full rounded-md border-none focus:outline-none h-40 pt-4 px-4"
              placeholder="Review in detail"></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] hover:opacity-90 text-white border-none px-6 rounded-none flex items-center gap-2">
              Send Review <FaRocket />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
