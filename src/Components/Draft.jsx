import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {
    // এখানে আপনার আইটেমের ডাটা থাকবে (ধরি লোডার থেকে আসছে)
    // const item = useLoaderData(); 
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Updated Data:", data);
        // আপনার আপডেট করার লজিক এখানে লিখুন
    };

    return (
        <div className="w-full min-h-screen bg-white py-10">
            {/* Title Section */}
            <h2 className="text-center text-4xl mb-12 font-medium uppercase">
                Update Item
            </h2>

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
                            placeholder="Recipe name"
                            // defaultValue={item?.name}
                            {...register("name", { required: true })}
                            className="input w-full rounded-md border-none focus:outline-none h-14"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register("category", { required: true })}
                                className="select w-full rounded-md border-none focus:outline-none h-14 bg-white text-gray-400"
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
                                placeholder="Price"
                                // defaultValue={item?.price}
                                {...register("price", { required: true })}
                                className="input w-full rounded-md border-none focus:outline-none h-14"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text font-bold text-gray-700">Recipe Details*</span>
                        </label>
                        <textarea
                            // defaultValue={item?.recipe}
                            {...register("recipe", { required: true })}
                            className="textarea w-full rounded-md border-none focus:outline-none h-40 pt-4"
                            placeholder="Recipe Details"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn bg-[#A27A2F] hover:bg-[#8B6828] text-white border-none px-10 rounded-none normal-case text-lg font-medium"
                        >
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
