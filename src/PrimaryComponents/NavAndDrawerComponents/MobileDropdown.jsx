import { NavLink, Link } from "react-router-dom";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";

const MobileDropdown = ({ signOut }) => {
  const { user } = UseAuthHook();

  return (
    <div className="dropdown dropdown-start">
      <div tabIndex={0} role="button" className="btn m-1">
        Click ⬇️
      </div>

      <ul className="absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur rounded-lg shadow-lg p-2 space-y-1 z-50">
        <li>
          <NavLink to="/" className="block text-white hover:text-orange-500">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="block text-white hover:text-orange-500">
            Contact Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ourmenu"
            className="block text-white hover:text-orange-500">
            Our Menu
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className="block text-white hover:text-orange-500">
                Log In
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className="block text-white hover:text-orange-500">
                Sign Up
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <li>
            <button
              onClick={signOut}
              className="w-full text-left text-red-500 hover:text-red-600">
              Log Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileDropdown;
