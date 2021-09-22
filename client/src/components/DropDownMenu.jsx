import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars, VscChevronUp } from "react-icons/vsc"

export default function DropDownMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      {toggleMenu === false ? (
        <button onClick={() => {
          setToggleMenu(prevState => !prevState)
        }}
          className="text-blue-300 text-3xl"><VscThreeBars /></button>) :
        (<div className={`dropdown open`}>
          <button onClick={() => {
            setToggleMenu(prevState => !prevState)
          }}
            className="text-gray-700 text-2xl text-center"><VscChevronUp /></button>
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