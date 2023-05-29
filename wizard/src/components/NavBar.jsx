import React from "react";
import "./Navbar.css";
import "./Houses.jsx";
import "./Spells.jsx";
import "./Potions.jsx";
import "./SortingHat.jsx";
import { Link } from "react-router-dom";



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
       {/* links to house.jsx */}
      <Link to="/houses">Houses</Link>
        {/* links to spells.jsx */}
      <Link to="/spells">Spells</Link>
       {/* links to potions.jsx  */}
      <Link to="/potions">Potions</Link>
      {/* links to sortinghat.jsx */}
      <Link to="/sortinghat">Sorting Hat</Link>
      <div id="indicator"></div>
    </nav>
  );
}
