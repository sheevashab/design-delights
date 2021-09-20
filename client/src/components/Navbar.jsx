import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/"><h1>Design Delights</h1></Link>
      </div>
      <div className="text-blue-500">
        <ul>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/interiors">Interiors</Link>
          </li>
          <li>
            <Link to="/architecture">Architecture</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
