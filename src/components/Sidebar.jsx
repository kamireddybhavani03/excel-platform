import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-gray-100 h-screen p-4 shadow-lg">
    <ul className="space-y-4">
      <li>
        <Link to="/dashboard" className="text-blue-600 font-semibold">
          📊 Dashboard
        </Link>
      </li>
      <li>
        <Link to="/upload" className="text-blue-600">
          ⬆️ Upload File
        </Link>
      </li>
      <li>
        <Link to="/charts" className="text-blue-600">
          📈 Generate Charts
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;