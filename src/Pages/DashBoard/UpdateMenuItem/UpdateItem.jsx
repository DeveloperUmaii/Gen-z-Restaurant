import { useForm } from 'react-hook-form';
import SecTionTitle from '../../../Components/SecTionTitle';
import { useLoaderData } from "react-router-dom";
import hookAxiosLocal from '../../../hooks/hookAxiosLocal';
import hookAxiosSecure from '../../../hooks/hookAxiosSecure';
import Swal from 'sweetalert2';

    const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const item = useLoaderData();
    const {name, category, price, recipe, _id} = item;
    // console.log(item)

      const { register, handleSubmit, reset } = useForm()
      const backEndServerLinkLocal = hookAxiosLocal();
      const backEndServerLink = hookAxiosSecure();
    
      const onSubmit = async (data) => {
        console.log("Updated Data:", data);
        // আপনার আপডেট করার লজিক এখানে লিখুন
        const image_file = { image: data.image[0] };
        const res = await backEndServerLinkLocal.post( image_hosting_api, image_file,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data.success) {
          const updateMenuItem = {
            name: data.name,
            recipe: data.recipe,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price),
          };
          const updateMenuRes = await backEndServerLink.patch(`/menu/${_id}`, updateMenuItem);
          console.log(updateMenuRes.data);
          if (updateMenuRes.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title:`${data.name}Menu item Updated`,
              text: "Menu item Updated successfully 🚀",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        }
        reset();
      };

    return (
        <div className="w-full min-h-screen bg-white py-10">
            {/* Title Section */}
                  {/* <SecTionTitle  subHeading='Menu' heading="Update Item" /> */}
                  <SecTionTitle  subHeading={name} heading="Update Item" />

            {/* Form Container */}
            <div className="max-w-4xl mx-auto bg-[#F3F3F3] p-10 md:p-20 rounded-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* Recipe Name */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-bold text-gray-700">Recipe name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            // defaultValue={item?.name}
                            {...register("name", { required: true })}
                            className="pl-3 input w-full rounded-md border-none focus:outline-none h-10"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Category*</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category", { required: true })}
                                className="pl-3  select w-full rounded-md border-none focus:outline-none h-10 bg-white text-gray-400"
                            >
                                <option disabled value="default">Category</option>
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
                                <span className="label-text font-bold text-gray-700">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                // defaultValue={item?.price}
                                {...register("price", { required: true })}
                                className="pl-3 input w-full rounded-md border-none focus:outline-none h-10"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text font-bold text-gray-700">Recipe Details*</span>
                        </label>
                        <textarea
                            defaultValue={recipe}
                            {...register("recipe", { required: true })}
                            className="pl-3 textarea w-full rounded-md border-none focus:outline-none h-30 pt-4"                            
                        ></textarea>
                    </div>

          {/* Image Upload */}
          <div className="form-control w-full mb-9">
            <input
              type="file"
              {...register("image", { required: true })}
              className="border-no file-input file-input-ghost w-full max-w-xs bg-[#fcfcfc31]"
            />
          </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn bg-[#A27A2F] hover:bg-[#8B6828] text-white border-none px-10 rounded-none normal-case text-lg font-medium"
                        >
                            Update Menu Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
