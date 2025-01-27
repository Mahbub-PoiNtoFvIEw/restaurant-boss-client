import { Link, NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
        </>
      ) : (
        <>
          <li>
            <NavLink to={`/login`}>Login</NavLink>
          </li>
        </>
      )}
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
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
