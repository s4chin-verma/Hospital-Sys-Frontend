import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
    </Router>
  )
}