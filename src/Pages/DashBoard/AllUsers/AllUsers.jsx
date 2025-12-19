// React-icons ব্যবহার করার জন্য, আপনাকে প্রথমে এটি ইনস্টল করতে হবে: npm install react-icons
import { FaTrashAlt, FaUserCog } from "react-icons/fa"; // FaUserCog হল Role আইকনের জন্য
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import hookAxiosSecure from "../../../hooks/hookAxiosSecure";
import Swal from "sweetalert2";
import { RiShieldUserFill } from "react-icons/ri";

// --- ডামি ডেটা (Dummy Data) ---
// const DUMMY_USERS = [
//   { id: 1, name: "John Doe", email: "john.doe@gmail.com", role: "Admin" },
//   { id: 2, name: "Jane Smith", email: "jane.s@gmail.com", role: "User" },
// ];

const AllUsers = () => {
  // const totalUsers = DUMMY_USERS.length;
  const backEndServerLink = hookAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await backEndServerLink.get("/users");
      return res.data;
    },
  });

  const handleMakeAdminUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
          backEndServerLink.patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch(); // UI আপডেট
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: `${user.name} is now an Admin`,
                timer: 1000,
                showConfirmButton: false,
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Failed to make admin",
            });
          });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${user.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        backEndServerLink
          .delete(`/users/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // UI reload ছাড়া আপডেট
              refetch();

              Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been removed successfully.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto my-10">
      {/* --- হেডার সেকশন --- */}
      <div className="text-center mb-6">
        <p className="text-sm font-light text-gray-500 tracking-widest">
          ---How many?---
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif tracking-wide text-gray-800 mt-1">
          MANAGE ALL USERS
        </h2>
      </div>

      {/* --- মোট ব্যবহারকারী সংখ্যা --- */}
      <h3 className="text-xl font-bold mb-4 text-gray-700">
        TOTAL USERS: <span className="text-2xl">{users?.length}</span>
      </h3>

      {/* --- টেবিল কন্টেইনার --- */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* --- টেবিল হেডার --- */}
          <thead className="bg-amber-800">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white w-12">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white hidden sm:table-cell">
                EMAIL
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white w-20">
                ROLE
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white w-20">
                ACTION
              </th>
            </tr>
          </thead>

          {/* --- টেবিল বডি --- */}
          <tbody className="bg-white divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-amber-50">
                {/* সিরিয়াল নং */}
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 bg-gray-50">
                  {index + 1}
                </td>

                {/* নাম */}
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800">
                  {user.name}
                </td>

                {/* ইমেল */}
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                  {user.email}
                </td>

                {/* রোল আইকন */}
                <td className="px-6 py-3 whitespace-nowrap text-center text-sm">
                  {/* ছবিতে হলুদ-বাদামী আইকনটি অনুসরণ করা হয়েছে */}
                  {user.role === "admin" ? (
                    <div
                      className="flex flex-col items-center justify-center text-green-600 hover:text-green-700 transition"
                      title="Admin">
                      <RiShieldUserFill className="text-3xl text-green-600" />
                      <span className="text-sm font-mono">Admin</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdminUser(user);
                        // console.log(`Deleting user: ${user.name}`);
                      }}
                      title="Make ADMIN User">
                      <span className="inline-flex items-center justify-center p-2 rounded-full bg-yellow-600/20 text-yellow-800 shadow-md">
                        <FaUserCog className="h-5 w-5" />
                      </span>
                    </button>
                  )}
                </td>

                {/* অ্যাকশন (ডিলিট) */}
                <td className="px-6 py-3 whitespace-nowrap text-center text-sm">
                  <button
                    onClick={() => {
                      handleDeleteUser(user);
                      // console.log(`Deleting user: ${user.name}`);
                    }}
                    className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-lg"
                    title="Delete User">
                    <FaTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
