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
    <form>
      <h3>Subscribe To Our Newsletter!</h3>
      <input
        onChange={handleInput}
        type="text"
        placeholder="email" />
      <br />
      <button>Subscribe</button>
    </form>
  )
}
