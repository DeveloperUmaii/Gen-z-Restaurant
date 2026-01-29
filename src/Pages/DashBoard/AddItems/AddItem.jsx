import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SecTionTitle from "../../../Components/SecTionTitle";
import hookAxiosLocal from "../../../hooks/hookAxiosLocal";
import hookAxiosSecure from "../../../hooks/hookAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const backEndServerLinkLocal = hookAxiosLocal();
  const backEndServerLink = hookAxiosSecure();

  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await backEndServerLinkLocal.post(
      image_hosting_api,
      image_file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await backEndServerLink.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Menu item successfully added 🚀",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
    reset();
    // আপনার API কল লজিক এখানে হবে
  };

  return (
    <div className="w-full px-4 md:px-10">
      {/* Section Title */}
      <SecTionTitle subHeading="What's new?" heading="Add An Item" />
      {/* Form Container */}
      <div className="bg-base-300 p-8 md:p-12 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text font-bold">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full focus:outline-none">
                <option disabled value="default">
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-32 focus:outline-none"
              placeholder="Recipe Details"></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full mb-8">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs bg-base-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] hover:opacity-90 text-white border-none rounded-none px-6">
            Add Item <FaUtensils className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
