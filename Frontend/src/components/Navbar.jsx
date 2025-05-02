import React from "react";

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
    <h1 className="text-xl font-bold">Excel Analytics</h1>
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}
      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
    >
      Logout
    </button>
  </nav>
);

export default Navbar;
