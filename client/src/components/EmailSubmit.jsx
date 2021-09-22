import React from "react";
import { useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form className="grid grid-cols-1">
      <h3 className="text-center text-base text-gray-700 font-semibold">
        Subscribe To Our Newsletter</h3>
      <input
        className="text-center place-self-center bg-soft-yellow text-gray-700 font-light w-48 mt-2 py-1 px-2 focus:outline-none border-b border-medium-blue"
        onChange={handleInput}
        type="text"
        // value={email}
        placeholder="your e-mail" />
      <button className="btn btn-outline text-gray-700 text-center place-self-center mt-2">
        Subscribe</button>
    </form>
  )
}