import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/fashion`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function FashionDelete(props) {
  const history = useHistory();
  const [showDelete, setShowDelete] = useState("block");

  async function handleDelete() {
    const res = await axios.delete(`${URL}/${props.id}`, config);
    history.push("/fashion");
    return res.data;
  }

  useEffect(() => {
    if (props.id === "rec9yc8CCR4g102aa" ||
      props.id === "rech8FN14X1uEtjsl" ||
      props.id === "recn6pLoiw7tBG0RF" ||
      props.id === "recwymybJVLfbRPli"
    ) {
      setShowDelete("none")
    } else {
      setShowDelete("block")
    }
  }, [props.id])

  return (
    <div key={props.id}>
      <button className="btn btn-outline my-2"
        style={{ display: showDelete }}
        onClick={handleDelete}>
        Remove
      </button>
    </div >
  )
}
