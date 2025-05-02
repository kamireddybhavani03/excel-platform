import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">
        <h2 className="text-2xl font-bold">Welcome to the Dashboard</h2>
        <p className="mt-4 text-gray-700">
          You’ll be able to upload Excel files and generate visual reports here.
        </p>
      </main>
    </div>
  </div>
);

export default Dashboard;
