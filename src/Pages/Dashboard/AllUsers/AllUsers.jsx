import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: `${user.name} is an admin now..!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      <SectionTitle
        subHeading="How Many??"
        Heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="bg-[#FFFFFF] mx:p-10 p-2 md:mx-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="uppercase rounded-xl bg-[#D1A054] text-white">
              <tr>
                <th className="rounded-tl-xl">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {users.map((user, idx) => (
                <tr key={idx}>
                  <th>{(idx = 1)}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin' ? 'Admin' :<button
                      onClick={() => handleMakeAdmin(user)}
                      className="p-2 rounded-sm cursor-pointer bg-[#D1A054] text-[#FFFFFF] text-xl"
                    >
                      <FaUsers></FaUsers>
                    </button>}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
