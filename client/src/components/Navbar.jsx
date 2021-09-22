import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

export default function Navbar() {
  return (
    <div className="navbar flex flex-column justify-between items-center bg-gray-700">
      <div>
        <Link to="/">
          <h1 className="ml-4 text-yellow-50 text-2xl font-bold leading-relaxed align-middle lg:text-6xl">
            Design<br />Delights</h1>
        </Link>
      </div>
      <div className="mr-4">
        <DropDownMenu />
      </div>
    </div>
  )
}
