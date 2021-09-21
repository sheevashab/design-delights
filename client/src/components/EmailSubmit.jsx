import React from "react";
import { useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form className="flex-column text-center">
      <h3 className="mt-8 text-center text-xl text-gray-700 font-semibold">
        Subscribe To Our Newsletter</h3>
      <input
        className="bg-red-100 hover:bg-red-200 w-1/2 text-gray-700 font-light mt-2 py-1 px-2 focus:outline-none border-b border-blue-200"
        onChange={handleInput}
        type="text"
        // value={email}
        placeholder="your e-mail" />
      <button className="flex-shrink-0 bg-blue-200 text-yellow-50 hover:bg-blue-300 border-blue-200 text-md font-semibold border-2 mt-2 py-1 px-2 rounded-full">
        Subscribe</button>
    </form>
  )
}