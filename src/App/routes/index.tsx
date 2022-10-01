import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//navigate = redirect if not found
import { Dashboard } from "../pages";

export const RoutesDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/Dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
