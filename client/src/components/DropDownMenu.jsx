import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc"

export default function DropDownMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      {/* (condition) ? true : false */}

      {toggleMenu === false ? (
        <button onClick={() => {
          setToggleMenu(prevState => !prevState)
        }}
          className="hamburger text-white"><VscMenu size={50} /></button>) :
        (<div className={`dropdown open`}>
          <p onClick={() => {
            setToggleMenu(prevState => !prevState)
          }}>x</p>
          <Link
            className="hover:text-yellow-50"
            to="/art">Art</Link>
          <Link
            className="hover:text-yellow-50"
            to="/fashion">Fashion</Link>
          <Link
            className="hover:text-yellow-50"
            to="/interiors">Interiors</Link>
          <Link
            className="hover:text-yellow-50"
            to="/architecture">Architecture</Link>
        </div >)}
    </>
  )
}
