import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading="At a Glance?"
        Heading="Payment History"
      ></SectionTitle>
      <div className="bg-[#FFFFFF] mx:p-10 p-2 md:mx-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Total Payments: {payments.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="uppercase rounded-xl bg-[#D1A054] text-white">
              <tr>
                <th className="rounded-tl-xl">#</th>
                <th>Email</th>
                <th>TotalPrice</th>
                <th>TransactionId</th>
                <th>PaymentDate</th>
                <th className="rounded-tr-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {payments.map((payment, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{payment.email}</td>
                  <td>$ {payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.date}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
