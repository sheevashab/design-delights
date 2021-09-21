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
    <div className="leading-loose text-gray-700">
      <img className="w-screen" src={art.fields?.image} alt="artwork" />
      <div className="grid grid-cols-2">
        <h3 className="mt-6 ml-6 text-xl font-semibold">Title</h3>
        <h4 className="mt-6 mr-6 text-lg font-light">{art.fields?.title}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold">Artist</h3>
        <h4 className="mt-4 mr-6 text-lg font-light">{art.fields?.artist}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold">Origin</h3>
        <h4 className="mt-4 mr-6 text-lg font-light">{art.fields?.origin}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold">Year</h3>
        <h4 className="mt-4 mr-6 text-lg font-light">{art.fields?.year}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold">Size</h3>
        <h4 className="mt-4 mr-6 text-lg font-light">{art.fields?.size}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold">Medium</h3>
        <h4 className="mt-4 mb-6 mr-6 text-lg font-light">{art.fields?.medium}</h4>

      </div>
      <Link to={`/art/${id}/`}></Link>
      <Delete id={id} />
    </div>
  )
}
