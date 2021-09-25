import axios from "axios";
import React from "react";
import ArchitectureDelete from "./ArchitectureDelete"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/architecture`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArchitectureDetail() {
  const [architecture, setArchitecture] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchArchitecture() {
      try {
        const res = await axios.get(`${URL}/${id}`, config);
        setArchitecture(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArchitecture();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="leading-loose text-gray-700">
      <Link to={`/architecture`}>
        <div className="flex flex-row justify-center">
          <img className="w-screen md:max-w-4xl md:self-center lg:mt-16" src={architecture.fields?.image} alt="building" />
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-x-12 m-2">
        <h3 className="mt-6 text-xl text-right font-semibold">Title</h3>
        <h4 className="mt-6 text-lg text-left font-light">{architecture.fields?.title}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Architect</h3>
        <h4 className="mt-4 text-lg text-left font-light">{architecture.fields?.architect}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Location</h3>
        <h4 className="mt-4 text-lg text-left font-light">{architecture.fields?.location}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Style</h3>
        <h4 className="mt-4 text-lg text-left font-light">{architecture.fields?.style}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Year</h3>
        <h4 className="mt-4 text-lg text-left font-light">{architecture.fields?.year}</h4>
      </div>
      <Link to={`/architecture/${id}/`}></Link>
      <ArchitectureDelete id={id} />
    </div>
  )
}