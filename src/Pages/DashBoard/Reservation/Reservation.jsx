import { useForm } from 'react-hook-form';
import { FaClipboardList } from 'react-icons/fa';
import hookAxiosLocal from '../../../hooks/hookAxiosLocal';
import SecTionTitle from '../../../Components/SecTionTitle';
import UseAuthHook from '../../../providers/ContexHook/UseAuthHook';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePending } from "react-icons/md";

const Reservation = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosLocal = hookAxiosLocal();
    const {user} = UseAuthHook();
    const navigate = useNavigate();

const onSubmit = async (data) => {
  try {
     const bookingData = {
       ...data,
       email: user.email,
       status: 'pending'
     };
    //console.log("Booking Data:",user, bookingData);
    const bookingRes = await axiosLocal.post('/booking-data', bookingData);
    console.log(bookingRes.data);

            if (bookingRes.data.insertedId) {
            reset();
            Swal.fire({
                icon: "success",
                title: "Reservation Successful! 🚀",
                text: "Your booking has been confirmed. See you soon! ❤️",
                timer: 2300,
                showConfirmButton: false,
                background: "#f8fafc",
                color: "#0f172a",
                iconColor: "#22c55e",
                padding: "2em",
                backdrop: `rgba(0,0,0,0.4)`
            });
            // navigate('/dashboarddrawer/mybookings')
            }
        } catch (error) {
            console.error("Error creating reservation:", error);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again.",
            });
        }
    };

    return (
        <div className="mt-10 w-full px-4 md:px-10 py-10 bg-white">
            {/* Title Section */}
            <div className="text-center mb-12">
                <SecTionTitle subHeading='Reservation' heading='Book A Table' />
            </div>

            {/* Form Section */}
            <div className="max-w-6xl mx-auto bg-[#14141410] px-16 py-10 rounded-md">
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
                                className="pl-5 input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Time*</span>
                            </label>
                            <input
                                type="time"
                                {...register("time", { required: true })}
                                className="pl-5 input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Guest*</span>
                            </label>
                            <select
                                defaultValue="1 Person"
                                {...register("guest", { required: true })}
                                className="pl-5 select select-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none font-normal"
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
                                className="pl-5 input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
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
                                className="pl-5 input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-700">Email*</span>
                            </label>
                            <input
                                type="email"
                                // placeholder={user?.email}
                                defaultValue={user?.email}
                                {...register("bookingEmail", { required: true })}
                                className="pl-5 input input-bordered w-full h-14 rounded-md border-gray-200 focus:outline-none"
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