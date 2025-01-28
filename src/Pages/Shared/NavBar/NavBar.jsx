import { Link, NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { BsCart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/menu`}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={`/order/salad`}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={`/secret`}>Secret</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 text-white bg-[#0000004D] max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0000004D] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={`/`} className="text-2xl uppercase font-bold flex flex-col">
            Bistro Boss<span className="spacing-sm text-sm">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end items-center">
          <Link to={`/dashboard/cart`}>
            <div className="relative mr-1">
              <FiShoppingCart className="text-5xl"></FiShoppingCart>
              <p className="absolute font-bold text-[16px] top-2 right-2 text-[#ee8e0e]">+{cart.length}</p>
            </div>
          </Link>
          {user ? (
            <>
              <button onClick={handleLogout} className="btn px-1 py-0 ml-2 mr-1 btn-ghost">
                Logout
              </button>
              {user?.photoURL && (
                <img
                  className="h-10 w-10 rounded-full border-2"
                  src={user?.photoURL}
                  alt=""
                />
              )}
            </>
          ) : (
            <>
              <button className="btn btn-ghost">
                <NavLink to={`/login`}>Login</NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
