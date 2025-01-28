import React from "react";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          refetch();
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
        <SectionTitle subHeading={"My Cart"} Heading={"WANNA ADD MORE?"}></SectionTitle>
      <div className="bg-[#FFFFFF] mx:p-10 p-2 md:mx-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Items : {cart.length}</h2>
          <h2 className="text-2xl font-bold">Total Price : ${totalPrice}</h2>
          <button className="btn  bg-[#D1A054] text-white">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="uppercase rounded-xl bg-[#D1A054] text-white">
              <tr>
                <th className="rounded-tl-xl">#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th className="rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      {/* <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div> */}
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 rounded-sm cursor-pointer bg-[#B91C1C] text-[#FFFFFF] text-xl"
                    >
                      <RiDeleteBinLine></RiDeleteBinLine>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
