import React from "react";
import { useState } from "react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value)
  }
  console.log(email);

  return (
    <form className="grid grid-cols-1">

      <h3 className="text-gray-700 text-xl text-center font-semibold mt-8">
        Subscribe To Our Newsletter
      </h3>

      <input
        className="place-self-center text-center bg-soft-yellow border-soft-orange font-light w-48 mt-2 py-1 px-2"
        onChange={handleInput}
        type="text"
        placeholder="your e-mail" />

      <button className="btn btn-outline font-bold place-self-center mt-2 mb-4">
        Join
      </button>
    </form>
  )
}