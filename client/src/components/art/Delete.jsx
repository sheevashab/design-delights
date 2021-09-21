import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

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

  async function handleDelete() {
    // console.log(props.id);
    const res = await axios.delete(`${URL}/${props.id}`, config);
    history.push("/art");
    return res.data;
  }

  return (
    <div key={props.id}>

      {/* if (props.id === rec7RJwKVZvmFPkzY) {

      }else if (props.id === rec9OKf4ExE4HUlO5) {

      }else if (props.id === recKgfuYG15nxsxkZ){

      }else if (props.id === recoJyNgJwKb61mBl){
      
      }
      else{ } */}

      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
