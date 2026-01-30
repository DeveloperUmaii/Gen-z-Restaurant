import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import hookAxiosSecure from "../../../hooks/hookAxiosSecure";

const ManageItems = () => {
  const [menu] = useMenu();
  const backEndServerLink = hookAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${item.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        backEndServerLink.delete(`/item/${item._id}`)
          .then((res) => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              // UI reload ছাড়া আপডেট
              refetch();

              Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been removed successfully.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch((err) => {
            console.log(err)
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
    <div className="w-full px-4 md:px-10 py-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <p className="text-yellow-600 italic mb-2">---Hurry Up!---</p>
        <h2 className="text-3xl uppercase border-y-4 py-3 inline-block px-10">
          Manage All Items
        </h2>
      </div>

      {/* Content Container */}
      <div className="bg-white p-6 md:p-12 shadow-sm rounded-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold uppercase font-serif">
            Total Items: {menu.length}
            {/* কারণ: items নামে কিছু নেই, ডাটা menu থেকে আসছে */}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-0">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th className="py-5 rounded-tl-xl">#</th>
                <th className="uppercase">Item Image</th>
                <th className="uppercase">Item Name</th>
                <th className="uppercase">Price</th>
                <th className="uppercase">Action</th>
                <th className="py-5 rounded-tr-xl uppercase">Action</th>
              </tr>
            </thead>

            <tbody>
              {menu.map((item, index) => (
                // কারণ: menu হলো আসল array
                <tr key={item._id || index} className="border-b">
                  {/* কারণ: MongoDB data হলে _id সবচেয়ে ভালো key */}
                  <td className="font-bold py-4">{index + 1}</td>

                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>

                  <td className="text-gray-500">{item.name}</td>

                  <td className="text-gray-500">${item.price}</td>

                  <td>
                    <button className="btn btn-md bg-[#D1A054] hover:bg-[#b88a42] text-white border-none rounded-md p-2">
                      <FaEdit className="text-xl" />
                    </button>
                  </td>
                  <td>
                    <div
                      className="tooltip tooltip-top z-50"
                      data-tip="Delete">
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-md bg-[#B91C1C] hover:bg-red-800 text-white border-none rounded-md p-2">
                        <FaTrashAlt className="text-xl" />
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

export default ManageItems;
