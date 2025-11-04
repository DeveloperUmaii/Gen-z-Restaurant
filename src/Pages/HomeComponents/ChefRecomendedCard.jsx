import { replace, useLocation, useNavigate } from "react-router-dom";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";

const ChefRecomendedCard = ({ ChefCard }) => {
  const { recipe, name, image } = ChefCard;
  const { user } = UseAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

const handleAddCart = (anyPeraMetre) => {
  !user
    ? Swal.fire({
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
          Swal.fire({
            title: "Redirecting...",
            text: "Please wait while we take you to the login page.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });

          // এখানে চাইলে তুমি React Router ব্যবহার করে রিডাইরেক্ট করতে পারো:
          navigate("/login", { state: { from: location }, replace: true })
        }
      })
    : Swal.fire({
        title: "Added to Cart!",
        text: "The item has been successfully added to your cart.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    console.log(anyPeraMetre, "Button add koira falaice ");
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

      {/* grow part */}
      <div className="px-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">{recipe}</p>
        </div>

        {/* button fixed bottom inside card */}
        <div className="mt-3 pb-4">
          <button
            onClick={() => {
              handleAddCart(ChefCard);
            }}
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
