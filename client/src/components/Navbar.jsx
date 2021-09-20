import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-column justify-between items-center bg-gray-700">
      <div className="Logo">
        <Link to="/"><h1 className="ml-4 text-2xl lg:text-6xl font-bold text-yellow-50 leading-relaxed align-middle">Design<br />Delights</h1></Link>
      </div>
      <div className="mr-4 text-blue-200 text-right pt-4 pb-4 leading-relaxed align-middle">
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
