import React from "react";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white m-1 postion-fixed h-100 "
        style={{ width: "250px" }}
      >
        <AdminNavbar />
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-0 bg-light "
        // style={{ marginLeft: "250px" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
