import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-column justify-between items-center">
      <div className="Logo">
        <Link to="/"><h1 className="text-xl font-bold text-gray-800 leading-relaxed">Design<br />Delights</h1></Link>
      </div>
      <div className="text-blue-400 text-right">
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
