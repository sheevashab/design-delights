import axios from "axios";
import React from "react";
import ArtDelete from "./ArtDelete"
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
        setArt(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArt();
    // eslint-disable-next-line
  }, [id])

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="leading-loose text-gray-700">
      <Link to={`/art`}>
        <img className="sm:w-screen md:max-w-4xl md:self-center" src={art.fields?.image} alt="artwork" />
      </Link>
      <div className="grid grid-cols-2">
        <h3 className="mt-6 ml-6 text-xl font-semibold lg:text-3xl">Title</h3>
        <h4 className="mt-6 mr-6 text-lg font-light lg:text-2xl">{art.fields?.title}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Artist</h3>
        <h4 className="mt-4 mr-6 text-lg font-light lg:text-2xl">{art.fields?.artist}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Origin</h3>
        <h4 className="mt-4 mr-6 text-lg font-light lg:text-2xl">{art.fields?.origin}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Year</h3>
        <h4 className="mt-4 mr-6 text-lg font-light lg:text-2xl">{art.fields?.year}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Size</h3>
        <h4 className="mt-4 mr-6 text-lg font-light lg:text-2xl">{art.fields?.size}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Medium</h3>
        <h4 className="mt-4 mb-6 mr-6 text-lg font-light lg:text-2xl">{art.fields?.medium}</h4>
      </div>
      <Link to={`/art/${id}/`}></Link>
      <ArtDelete id={id} />
    </div>
  )
}
