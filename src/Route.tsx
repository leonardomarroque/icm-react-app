import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Praise from "./pages/Praise";
import Users from "./pages/Users";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="praises" element={<Praise />} />
        </Route>
      </Routes>
    </Router>
  );
}
