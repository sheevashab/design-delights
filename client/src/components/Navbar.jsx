import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/"><h1>Design Delights</h1></Link>
      </div>
      <div className="Links">
        <ul>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
