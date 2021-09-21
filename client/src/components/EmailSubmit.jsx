import React from "react";
import { useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");

  function handleInput(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="flex-column text-center w-3/4">
      <h3 className="text-gray-700 text-xl text-center font-semibold mt-8 ">
        Subscribe To Our Newsletter</h3>
      <div className="flex items-center border-b border-blue-200 py-2">
        <input
          className="bg-red-100 hover:bg-red-200 w-1/2 text-gray-700 font-light mt-2 py-1 px-2 focus:outline-none"
          onChange={handleInput}
          type="text"
          placeholder="your e-mail" />
        <button className="flex-shrink-0 bg-blue-200 text-yellow-50 hover:bg-blue-300 border-blue-200 text-md font-semibold border-4 py-1 px-2 rounded">
          Subscribe</button>
      </div>
    </form>
  )
}