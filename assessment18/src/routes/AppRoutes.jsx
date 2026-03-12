import { Navigate, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Forbidden from "../pages/Forbidden";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import DashboardLayout from "../layouts/DashboardLayout";

import Overview from "../pages/dashboard/overview/Overview";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import ManageProducts from "../pages/dashboard/admin/ManageProducts";

import Profile from "../pages/dashboard/user/Profile";
import Orders from "../pages/dashboard/user/Orders";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forbidden" element={<Forbidden />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          
          {/* Default dashboard page */}
          <Route index element={<Navigate to="overview" replace />} />
          
          {/* Overview */}
          <Route path="overview" element={<Overview />} />

          {/* Admin Routes */}
          <Route element={<RoleRoute allow="admin" />}>
            <Route path="admin/users" element={<ManageUsers />} />
            <Route path="admin/products" element={<ManageProducts />} />
          </Route>

          {/* User Routes */}
          <Route element={<RoleRoute allow="user" />}>
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders />} />
          </Route>

        </Route>
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}