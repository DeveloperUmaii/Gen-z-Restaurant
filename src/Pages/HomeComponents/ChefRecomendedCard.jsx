import { useLocation, useNavigate } from "react-router-dom";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";
import axios from "axios";
import hookAxiosSecure from "../../hooks/hookAxiosSecure";

const ChefRecomendedCard = ({ ChefCard }) => {
  const { recipe, name, image, _id, price } = ChefCard;
  const { user } = UseAuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  const backEndServerLink = hookAxiosSecure();

  const handleAddCart = (anyPeraMetre) => {
    // 🔹 প্রথমে চেক করো ইউজার লগইন আছে কিনা
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      // axios.post("http://localhost:5000/carts", cartItem)
      backEndServerLink.post('/carts', cartItem)
      .then((res) => {
        console.log("AXIOS DATA SEND CART", res.data);

        if (res.data.insertedId) {
          Swal.fire({
            title: "Added to Cart!",
            text: "The item has been successfully added to your cart.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          console.log(anyPeraMetre, "Button add koira falaice ");
        }
      });
    } else {
      // 🔹 যদি ইউজার লগইন না করে থাকে
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add this item to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-white border border-blue-500 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <figure className="p-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="px-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">{recipe}</p>
        </div>

        <div className="mt-3 pb-4">
          <button
            onClick={() => handleAddCart(ChefCard)}
            className="btn btn-sm btn-primary uppercase w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendedCard;
