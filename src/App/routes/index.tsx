import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//navigate = redirect if not found
import { Dashboard } from "../pages";
import { Login } from "../pages/login/Login";

export const RoutesDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Navigate to="/Dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
