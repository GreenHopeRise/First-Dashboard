import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  BarElement,
  ArcElement,
} from "chart.js";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  productCategoryData,
  productCategoryOptions,
  userGrowthData,
  userGrowthOptions,
} from "../data/chartData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen m-3 rounded-xl">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">Dashboard</h1>
      {/* Bar Chart Container */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Product Categories</h2>
        <Bar data={productCategoryData} options={productCategoryOptions} />
      </div>
      {/* Line Chart Container */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 ">
        <h2 className="text-xl font-medium mb-4">User Growth</h2>
        <Line className="" data={userGrowthData} options={userGrowthOptions} />
      </div>
      {/* Pie Chart Container */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Product Categories Pie</h2>
        <Pie data={productCategoryData} options={productCategoryOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
