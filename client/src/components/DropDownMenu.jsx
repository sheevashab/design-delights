import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function DropDownMenu() {
  const [showMenu, setShowMenu] = useState("")
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleClick() {
    if (toggleMenu) {
      setShowMenu("open")
    } else {
      setShowMenu("")
    }
  }

  return (
    <>
      <button onClick={() => {
        setToggleMenu(prevState => !prevState)
        handleClick()
      }} className="hamburger">Menu</button>
      <div className={`dropdown ${showMenu}`}>
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
      </div >
    </>
  )
}
