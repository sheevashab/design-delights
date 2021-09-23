import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/art`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArtDelete(props) {
  const history = useHistory();
  const [showDelete, setShowDelete] = useState("block");

  async function handleDelete() {
    const res = await axios.delete(`${URL}/${props.id}`, config);
    history.push("/art");
    return res.data;
  }

  useEffect(() => {
    if (props.id === "rec7RJwKVZvmFPkzY" ||
      props.id === "rec9OKf4ExE4HUlO5" ||
      props.id === "recKgfuYG15nxsxkZ" ||
      props.id === "recoJyNgJwKb61mBl"
    ) {
      setShowDelete("none")
    } else {
      setShowDelete("block")
    }
  }, [])

  return (
    <div key={props.id}>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-circle m-4" style={{ display: showDelete }} onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div >
    </div >
  )
}
