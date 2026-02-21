import React from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import SecTionTitle from "../../../Components/SecTionTitle";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const bookings = [
    {
      id: 1,
      name: "musaA",
      date: "26/10/24",
      time: "07:30 PM",
      guest: "2 Persons",
      bookingEmail: "guest@mail.com",
      status: "pending",
    },
    {
      id: 2,
      name: "musaB",
      date: "26/10/24",
      time: "07:30 PM",
      guest: "2 Persons",
      bookingEmail: "guest@mail.com",
      status: "pending",
    },
    {
      id: 3,
      name: "musaC",
      date: "26/10/24",
      time: "07:30 PM",
      guest: "2 Persons",
      bookingEmail: "guest@mail.com",
      status: "pending",
    },
  ];

  const handleUpdateStatus = async (id) => {
    const result = await Swal.fire({
      title: "Respond to booking request, Please!",
      showDenyButton: true,
      confirmButtonText: "Approve",
      denyButtonText: "Reject",
    });

    let newStatus;

    if (result.isConfirmed) {
      newStatus = "approved";
    } else if (result.isDenied) {
      newStatus = "rejected";
    } else {
      return; // কিছু না চাপলে কিছুই হবে না
    }

    try {
      const res = await axiosLocal.patch(`/bookings/${id}`, {
        status: newStatus,
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Success!", "Status updated successfully", "success");
        refetch(); // react-query হলে
      }
    } catch (error) {
      Swal.fire("Error!", "Status update failed", "error");
    }
  };
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SecTionTitle subHeading="At a Glance" heading="Manage All Bookings" />
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
                <th className="uppercase text-sm">Guest Name</th>
                <th className="uppercase text-sm">Email</th>
                <th className="uppercase text-sm">Guest</th>
                <th className="uppercase text-sm">Date</th>
                <th className="uppercase text-sm">Time</th>
                <th className="uppercase text-sm">Status</th>
                <th className="py-5 rounded-tr-xl uppercase text-sm">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className="border-b">
                  <th className="py-6 font-medium text-gray-700">
                    {index + 1}
                  </th>
                  <td className="text-gray-500">{booking?.name}</td>
                  <td className="text-gray-500">{booking?.bookingEmail}</td>
                  <td className="text-gray-500">{booking?.guest}</td>
                  <td className="text-gray-500">{booking?.date}</td>
                  <td className="text-gray-500">{booking?.time}</td>

                  <td className="flex flex-col items-center justify-center gap-1">
                    {/* আইকন উপরে থাকবে */}
                    <MdOutlinePending className="text-2xl text-green-600" />

                    {/* টেক্সট একদম আইকনের নিচে থাকবে */}
                    <span
                      className={`text-sm font-medium ${booking.status === "pending" ? "text-green-600" : "text-orange-600"}`}>
                      {booking.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      {/* Status Update/Confirm Button */}
                      <button
                        onClick={() => {
                          handleUpdateStatus();
                        }}
                        className="btn btn-ghost bg-[#28A745] hover:bg-green-700 text-white btn-sm rounded-full p-2 h-10 w-10">
                        <FaCheckCircle className="text-xl" />
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

export default ManageBookings;
