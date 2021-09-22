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

export default function Delete(props) {
  const history = useHistory();
  const [showDelete, setShowDelete] = useState("block");

  async function handleDelete() {
    // console.log(props.id);
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
      <button className="bg-blue-300 text-yellow-50 hover:bg-blue-200 border-blue-100 text-sm font-light border-2 mt-2 py-1 px-3 rounded-full font-mono"
        style={{ display: showDelete }} onClick={handleDelete}>Delete<br />Thoughtfully</button >
    </div >
  )
}
