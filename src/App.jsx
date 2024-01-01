import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Login from './pages/Login';
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}
