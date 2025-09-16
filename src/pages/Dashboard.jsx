import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-3xl font-bold mt-2">1,245</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Total Products</h2>
        <p className="text-3xl font-bold mt-2">532</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Orders Today</h2>
        <p className="text-3xl font-bold mt-2">128</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Revenue</h2>
        <p className="text-3xl font-bold mt-2">$12,345</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Pending Tasks</h2>
        <p className="text-3xl font-bold mt-2">42</p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Feedbacks</h2>
        <p className="text-3xl font-bold mt-2">17</p>
      </div>
    </div>
  );
};

export default Dashboard;