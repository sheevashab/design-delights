import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/architecture`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArchitectureDelete(props) {
  const history = useHistory();
  const [showDelete, setShowDelete] = useState("block");

  async function handleDelete() {
    const res = await axios.delete(`${URL}/${props.id}`, config);
    history.push("/architecture");
    return res.data;
  }

  useEffect(() => {
    if (props.id === "recki8L07gyhFHqFy" ||
      props.id === "recgRQ1QgZyxxE1Bt" ||
      props.id === "recki8L07gyhFHqFy" ||
      props.id === "recpzNH4YwWlhacCH"
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