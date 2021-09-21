import React from "react";
import { useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form>
      <h3 className="mt-8 text-center text-xl text-gray-700 font-semibold">
        Subscribe To Our Newsletter</h3>
      <input
        className="bg-soft-orange hover:medium-orange w-1/2 text-gray-700 font-light mt-2 py-1 px-2 focus:outline-none border-b border-medium-blue"
        onChange={handleInput}
        type="text"
        // value={email}
        placeholder="your e-mail" />
      <button className="flex-shrink-0 bg-medium-blue text-yellow-50 hover:bg-blue-300 border-blue-200 text-md font-semibold border-2 mt-2 py-1 px-2 rounded-full">
        Subscribe</button>
    </form>
  )
}