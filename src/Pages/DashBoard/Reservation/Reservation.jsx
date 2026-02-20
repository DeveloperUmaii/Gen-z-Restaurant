import { useForm } from 'react-hook-form';
import { FaClipboardList } from 'react-icons/fa';

const Reservation = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // এখানে আপনার রিজার্ভেশন লজিক লিখুন
    };

    return (
        <div className="w-full px-4 md:px-10 py-10 bg-white">
            {/* Title Section */}
            <div className="text-center mb-12">
                <p className="text-yellow-600 italic mb-2">---Reservation---</p>
                <h2 className="text-4xl uppercase border-y-4 py-3 inline-block px-10 font-medium">
                    Book A Table
                </h2>
            </div>

            {/* Form Section */}
            <div className="max-w-6xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* First Row: Date, Time, Guest */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Date*</span>
                            </label>
                            <input
                                type="date"
                                {...register("date", { required: true })}
                                className="input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Time*</span>
                            </label>
                            <input
                                type="time"
                                {...register("time", { required: true })}
                                className="input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Guest*</span>
                            </label>
                            <select
                                defaultValue="1 Person"
                                {...register("guest", { required: true })}
                                className="select select-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none font-normal"
                            >
                                <option>1 Person</option>
                                <option>2 Persons</option>
                                <option>3 Persons</option>
                                <option>4 Persons</option>
                                <option>5+ Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* Second Row: Name, Phone, Email */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: true })}
                                className="input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Phone*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                {...register("phone", { required: true })}
                                className="input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] hover:opacity-90 text-white border-none px-8 rounded-none normal-case text-lg font-medium flex items-center gap-2 h-14"
                        >
                            Book A Table <FaClipboardList />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;