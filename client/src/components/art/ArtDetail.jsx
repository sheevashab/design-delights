import axios from "axios";
import React from "react";
import Delete from "./Delete"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/art`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArtDetail() {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchArt() {
      try {
        const res = await axios.get(`${URL}/${id}`, config);
        console.log(res.data);
        setArt(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArt();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <button type="button" className="bg-rose-600 ..." disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading
    </button>
  }

  return (
    <div>
      <img className="sm:w-4 lg:w-12" src={art.fields?.image} alt="artwork" />
      <h3>Title:</h3>
      <h4>{art.fields?.title}</h4>
      <h3>Artist:</h3>
      <h4>{art.fields?.artist}</h4>
      <h3>Origin:</h3>
      <h4>{art.fields?.origin}</h4>
      <h3>Year:</h3>
      <h4>{art.fields?.year}</h4>
      <h3>Medium:</h3>
      <h4>{art.fields?.medium}</h4>
      <h3>Size:</h3>
      <h4>{art.fields?.size}</h4>
      <Link to={`/art/${id}/`}></Link>
      <Delete id={id} />
    </div>
  )
}
