import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaBook, FaUsers } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#640cc9"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  //   custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //   custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data => {
    return {name: data.category, value: data.revenue};
  })

  return (
    <div className="mt-10">
      <h2 className="text-4xl">
        <span>Hi, Welcome </span>
        {user?.displayname ? user?.displayname : "Back"}
      </h2>
      <div className="grid grid-cols-4 mt-6 gap-4">
        <div className="flex justify-center items-center gap-4 shadow text-white bg-linear-to-r from-[#BB34F5] to-[#FCDBFF] p-4 rounded-lg">
          <div className="stat-figure">
            <IoWalletSharp className="text-4xl"></IoWalletSharp>
          </div>
          <div>
            <p className="text-4xl font-bold">${stats?.revenue}</p>
            <h2 className="text-2xl">Revenue</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 shadow text-white bg-linear-to-r from-[#D3A256] to-[#FDE8C0] p-4 rounded-lg">
          <div className="stat-figure">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div>
            <p className="text-4xl font-bold">{stats?.users}</p>
            <h2 className="text-2xl">Customers</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 shadow text-white bg-linear-to-r from-[#FE4880] to-[#FECDE9] p-4 rounded-lg">
          <div className="stat-figure">
            <FaBook className="text-4xl"></FaBook>
          </div>
          <div>
            <p className="text-4xl font-bold">{stats?.menuItems}</p>
            <h2 className="text-2xl">Menu Items</h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 shadow text-white bg-linear-to-r from-[#6AAEFF] to-[#B6F7FF] p-4 rounded-lg">
          <div className="stat-figure">
            <FaTruckMoving className="text-4xl"></FaTruckMoving>
          </div>
          <div>
            <p className="text-4xl font-bold">{stats?.orders}</p>
            <h2 className="text-2xl">Orders</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <PieChart width={400} height={280}>
            <Legend></Legend>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
