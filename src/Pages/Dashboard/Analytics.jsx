
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import React from "react";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();

 
  const { data = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      return res.data;
    },
  });

 
  const {
    scholarshipCount = 0,
    usersCount = 0,
    paymentCount = 0,
    applysCount = 0,
    reviewCount = 0,
  } = data;

  
  const chartData = [
    { name: "Total scholarships", value: scholarshipCount },
    { name: "Total Users", value: usersCount },
    { name: "Total payments", value: paymentCount },
    { name: "Total applied", value: applysCount },
    { name: "Total reviews", value: reviewCount },
  ];

 
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

 
  const renderCustomLabel = ({ name, value }) => `${name}: ${value}`;

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mt-5">Analytics Overview</h2>
      <PieChart width={700} height={700}>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={140}
          fill="#82ca9d"
          label={renderCustomLabel}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Analytics;
