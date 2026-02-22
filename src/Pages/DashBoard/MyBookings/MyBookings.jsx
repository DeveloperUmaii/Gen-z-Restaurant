import { FaTrashAlt, FaCheck } from "react-icons/fa";
import hookAxiosSecure from "../../../hooks/hookAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuthHook from "../../../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";
import { MdOutlinePending } from "react-icons/md";
import SecTionTitle from "../../../Components/SecTionTitle";
import { FcApproval } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";

const MyBookings = () => {
  const axiosSecure = hookAxiosSecure();
  const { user, loading } = UseAuthHook();

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user?.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your booking",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/bookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // UI আপডেট করার জন্য refetch
              refetch();

              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been removed successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting the booking.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SecTionTitle subHeading='At a Glance!' heading='Manage All Bookings'/>
      </div>

      {/* Table Container */}
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 shadow-sm border border-gray-100 rounded-sm">
        <h2 className="text-3xl font-bold uppercase mb-8 font-serif">
          Total Bookings: {bookings.length}
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-0">
            {/* Table Head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th className="py-5 rounded-tl-xl">#</th>
                <th className="uppercase text-sm">Email</th>
                <th className="uppercase text-sm">Date</th>
                <th className="uppercase text-sm">Time</th>
                <th className="uppercase text-sm">Guest</th>
                <th className="uppercase text-sm">Status</th>
                <th className="py-5 rounded-tr-xl uppercase text-sm">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="border-b">
                  <th className="py-6 font-medium text-gray-700">
                    {index + 1}
                  </th>
                  <td className="text-gray-500">{booking.bookingEmail}</td>
                  <td className="text-gray-500">{booking.date}</td>
                  <td className="text-gray-500">{booking.time}</td>
                  <td className="text-gray-500">{booking.guest}</td>
                  <td className="flex flex-col items-center justify-center gap-1">
                    {booking.status === "Approved" ? (
                      <div className="">
                        <FcApproval className="text-2xl text-[#03aa19]" />
                      </div>
                    ) : booking.status === "Rejected" ? (
                      <div className="">
                        <ImCancelCircle className="text-xl text-red-600" />
                      </div>
                    ) : (
                      <div className="">
                        <MdOutlinePending className="text-2xl text-orange-300" />
                      </div>
                    )}
                    <span
                      className={`text-sm font-medium ${booking.status === "Approved" ? "text-[#03aa19]" : booking.status === "Rejected" ? "text-red-600" : "text-orange-300"}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="ml-6 mt-2 text-red-600">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
