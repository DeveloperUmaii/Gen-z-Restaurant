import { FaTrashAlt } from "react-icons/fa";
import hookUseCart from "../../../hooks/hookUseCart";
// 🔹 নতুনভাবে ইম্পোর্ট করছি axios এবং Swal
import axios from "axios"; // ✅ (নতুন লাইন)
import Swal from "sweetalert2"; // ✅ (নতুন লাইন)
import SecTionTitle from "../../../Components/SecTionTitle";

// const Cart = ({ cart = [] }) => {
const Cart = () => {
  // 🔹 cart state-কে আপডেট করার জন্য hookUseCart থেকে setCart যোগ করেছি
  const [cart, refetch] = hookUseCart(); // ✅ (পরিবর্তন করা লাইন)


  // Calculate total price
  // acc বা accumulator বা 0 ধরে নেওয়া বা প্রিভিয়াস ভ্যালু;
  //item= বর্তমান ভ্যালু বা cart থেকে পাওয়া ভ্যালু(10,50,23 etc) বা ইন্সার্ট করা ভ্যালু বা ইনপুট দেওয়া ভ্যালু বা  ভ্যালু পাইলাম সেইটা
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  // 🔹 নতুনভাবে handleDelete ফাংশন যুক্ত করছি
  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // 🔹 axios দিয়ে DELETE রিকোয়েস্ট পাঠানো
        axios
          .delete(`http://localhost:5000/carts/${id}`)
          .then((res) => {
            // 🔹 সার্ভারে সফলভাবে ডিলিট হলে UI থেকেও মুছে ফেলব
            if (res.data.deletedCount > 0) {
              // UI আপডেট refetch()কে কল করে (reload ছাড়াই)
              refetch();

              // UI আপডেট (reload ছাড়াই)
              // setCart((prevCart) => prevCart.filter((item) => item._id !== id));
              // ব্যবহার করে 

              Swal.fire({
                title: "Deleted!",
                text: `${name} has been removed from your cart.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error"
            });
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      {/* Heading */}
      <SecTionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />
      {/* Summary Section */}
      <div className="flex justify-between items-center mb-6 border-b pb-3 text-lg font-medium">
        <p>
          TOTAL ORDERS:{" "}
          <span className="font-bold text-yellow-700">{cart.length}</span>
        </p>
        <p>
          TOTAL PRICE:{" "}
          <span className="font-bold text-yellow-700">${totalPrice}</span>
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-semibold">
          Pay
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-yellow-600 text-white text-left">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">ITEM IMAGE</th>
              <th className="py-3 px-4">ITEM NAME</th>
              <th className="py-3 px-4">PRICE</th>
              <th className="py-3 px-4 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={item._id} // 🔹 item.id → item._id করেছি (MongoDB-এর জন্য)
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md border"
                  />
                </td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">${item.price}</td>
                <td className="py-3 px-4 text-center">
                  {/* 🔹 আগের alert() ফাংশনটি কমেন্ট করে দিয়েছি */}
                  {/* onClick={() => alert(`Removed ${item.name}`)} */}
                  {/* 🔹 নতুন handleDelete ফাংশন ব্যবহার করছি */}
                  <button
                    onClick={() => handleDelete(item._id, item.name)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrashAlt size={18} />
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

export default Cart;
