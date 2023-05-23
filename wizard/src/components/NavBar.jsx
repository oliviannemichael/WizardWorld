import React from "react";
import "./Navbar.css";
// import routes
import { Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav className="navbar">
    //   <div className="container-fluid">
    //     <span className="navbar-toggler-icon">
    //       <a className="nav-link" href="#">
    //         Home
    //       </a>
    //     </span>
    //     <span className="navbar-text mx-3">
    //       <a className="nav-link" href="#">
    //         Houses
    //       </a>
    //     </span>
    //     <span className="navbar-text mx-3">
    //       <a className="nav-link" href="#">
    //         Spells
    //       </a>
    //     </span>
    //     <span className="navbar-text mx-3">
    //       <a className="nav-link" href="#">
    //         Potions
    //       </a>
    //     </span>
    //   </div>
    // </nav>
    <nav>
      <a href="#">Home</a>
        {/* Routing */}
      <Routes>
        {/* Routing to Houses.jsx */}
      <Route NavLink to="/houses" element={<Houses></Houses>}>Houses</Route>
      </Routes>
      <a href="#">Spells</a>
      <a href="#">Potions</a>
      <div id="indicator"></div>
    </nav>
  );
}
