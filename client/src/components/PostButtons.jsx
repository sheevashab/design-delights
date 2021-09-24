import React from "react";
import { Link } from "react-router-dom";

export default function PostButtons() {
  return (
    <div>
      <p className="mt-8 text-center text-xl text-gray-700 font-semibold">
        Get Started</p>
      <Link to='/art/new'>
        <div className="flex justify-center">
          <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
            Add Your Art</button>
        </div>
      </Link>

      <Link to='/fashion/new'>
        <div className="flex justify-center">
          <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
            Add Your Fashion</button>
        </div>
      </Link>

      <Link to='/interiors/new'>
        <div className="flex justify-center">
          <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
            Add Your Interiors</button>
        </div>
      </Link>

      <Link to='/architecture/new'>
        <div className="flex justify-center">
          <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
            Add Your Architecture</button>
        </div>
      </Link>
    </div>
  )
}
