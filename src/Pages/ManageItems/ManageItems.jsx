import React from "react";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data, item);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        Heading="MANAGE ALL ITEMS"
        subHeading="Hurry up!"
      ></SectionTitle>
      <div className="bg-[#FFFFFF] mx:p-10 p-2 md:mx-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Total Items: {menu.length}</h2>
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
                <th>Action</th>
                <th className="rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {menu.map((item, idx) => (
                <tr key={idx}>
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
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="p-2 rounded-sm cursor-pointer bg-[#D1A054] text-[#FFFFFF] text-xl">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
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

export default ManageItems;
