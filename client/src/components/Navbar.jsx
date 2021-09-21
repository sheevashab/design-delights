import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="flex flex-column justify-between items-center bg-gray-700">
      <div>
        <Link to="/">
          <h1 className="ml-4 text-2xl font-bold text-yellow-50 leading-relaxed align-middle lg:text-6xl">
            Design<br />Delights</h1>
        </Link>
      </div>
      <div
        className="mr-4 text-medium-blue text-l text-right font-medium pt-4 pb-4 leading-relaxed align-middle lg:text-2xl lg:font-light">
        <ul>
          <li>
            <Link
              className="hover:text-yellow-50"
              to="/art">Art
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-50"
              to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-50"
              to="/interiors">Interiors</Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-50"
              to="/architecture">Architecture</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
