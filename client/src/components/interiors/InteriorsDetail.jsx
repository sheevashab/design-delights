import axios from "axios";
import React from "react";
import InteriorsDelete from "./InteriorsDelete"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/interiors`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function InteriorsDetail() {
  const [interiors, setInteriors] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchInteriors() {
      try {
        const res = await axios.get(`${URL}/${id}`, config);
        setInteriors(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInteriors();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="leading-loose text-gray-700">
      <Link to={`/interiors`}>
        <div className="flex flex-row justify-center">
          <img className="w-screen md:max-w-4xl md:self-center lg:mt-16" src={interiors.fields?.image} alt="interior design piece" />
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-x-12 m-2">
        <h3 className="mt-6 text-xl text-right font-semibold">Product Name</h3>
        <h4 className="mt-6 text-lg text-left font-light">{interiors.fields?.productName}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Designer</h3>
        <h4 className="mt-4 text-lg text-left font-light">{interiors.fields?.designer}</h4>
        <h3 className="mt-4 text-xl text-right font-semibold">Year</h3>
        <h4 className="mt-4 text-lg text-left font-light">{interiors.fields?.year}</h4>
      </div>
      <Link to={`/interiors/${id}/`}></Link>
      <InteriorsDelete id={id} />
    </div>
  )
}

// 