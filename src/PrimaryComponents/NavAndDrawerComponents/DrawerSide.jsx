import { Link } from "react-router-dom";
import hookAdmin from "../../hooks/hookAdmin";
import hookUseCart from "../../hooks/hookUseCart";
import { IoMenu } from "react-icons/io5";

const DrawerSide = () => {
  const [cart] = hookUseCart();
  const [isAdmin] = hookAdmin();

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-4"
        className="btn btn-square btn-ghost text-orange-500 border-r-2 border-orange-600 hover:bg-[#ff68035b] transition duration-300 hover:rotate-90">
        <IoMenu size={18} />
      </label>

      {/* <div className="min-h-full bg-yellow-900 text-white w-72"> */}
      <div className="min-h-full bg-yellow-900 text-white w-72 transform transition-transform duration-300 ease-in-out">
        <div className="p-4 border-b border-yellow-800">
          <h1 className="text-xl font-bold">Gen-Z</h1>
          <p className="text-xs text-yellow-300">RESTAURANT</p>
        </div>

        <div className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <Link to="/dashboardDrawer/adminhome">ADMIN HOME</Link>
              <Link to="/dashboardDrawer/additem">ADD ITEMS</Link>
              <Link to="/dashboardDrawer/manageitems">MANAGE ITEMS</Link>
              <Link to="/dashboardDrawer/managebookings">
                MANAGE BOOKING ({cart?.length})
              </Link>
              <Link to="/dashboardDrawer/allusers">ALL USERS</Link>
            </>
          ) : (
            <>
              <Link to="/dashboardDrawer/userhome">USER HOME</Link>
              <Link to="/dashboardDrawer/reservation">RESERVATION</Link>
              <Link to="/dashboardDrawer/paymenthistory">PAYMENT HISTORY</Link>
              <Link to="/dashboardDrawer/cart">MY CART ({cart?.length})</Link>
              <Link to="/dashboardDrawer/addreview">ADD REVIEW</Link>
              <Link to="/dashboardDrawer/mybooking">MY BOOKING</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DrawerSide;
