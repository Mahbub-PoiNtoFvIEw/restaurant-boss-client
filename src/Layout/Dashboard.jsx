import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaLock,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <div className="text-2xl uppercase font-bold flex flex-col pl-8 mb-4">
          Bistro Boss<span className="spacing-sm text-sm">Restaurant</span>
        </div>
        <ul className="menu p-4 text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/adminHome`}
                >
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/addItems`}
                >
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/manageItems`}
                >
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/manageBookings`}
                >
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/allUsers`}
                >
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/userHome`}
                >
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/reservation`}
                >
                  <FaCalendarAlt></FaCalendarAlt>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/paymentHistory`}
                >
                  <IoWalletSharp></IoWalletSharp>
                  Payment history
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/cart`}
                >
                  <FaShoppingCart></FaShoppingCart>
                  <p className="relative">
                    My Cart{" "}
                    <span className="text-[#B91C1C] absolute right-9 -top-2">
                      ({cart.length})
                    </span>
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/review`}
                >
                  <MdReviews></MdReviews>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "text-[#FFFFFF] font-bold "
                  }
                  to={`/dashboard/booking`}
                >
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive && "text-[#FFFFFF] font-bold "
              }
              to={`/`}
            >
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive && "text-[#FFFFFF] font-bold "
              }
              to={`/menu`}
            >
              <GiHamburgerMenu></GiHamburgerMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive && "text-[#FFFFFF] font-bold "
              }
              to={`/order/salad`}
            >
              <FaLock></FaLock>
              Order Food
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive && "text-[#FFFFFF] font-bold "
              }
              to={`/contact`}
            >
              <FaMessage></FaMessage>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:px-10 px-2 bg-[#F3F3F3]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
