import axios from "axios";
import React from "react";
import FashionDelete from "./FashionDelete"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/fashion`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function FashionDetail() {
  const [fashion, setFashion] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchFashion() {
      try {
        const res = await axios.get(`${URL}/${id}`, config);
        setFashion(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFashion();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <Link to={'/fashion'}>
          <img className="w-screen md:max-w-4xl md:self-center lg:mt-16"
            src={fashion.fields?.image} alt="piece of fashion" />
        </Link>
      </div>

      <div className="bg-soft-orange place-self-center my-8 rounded-lg w-4/5 md:w-1/2">
        <div className="grid grid-cols-2 gap-x-12 m-6 p-4 text-gray-700">
          <h3 className="text-xl text-left font-semibold md:pl-4">Designer</h3>
          <h4 className="text-lg text-left font-light">{fashion.fields?.designer}</h4>
          <h3 className="mt-4 text-xl text-left font-semibold md:pl-4">Website</h3>
          <a className="mt-4 text-lg text-left font-light"
            href={fashion.fields?.website} target="_blank" rel="noreferrer">
            Link to site
          </a>
        </div>
        <div className="flex flex-row justify-center pb-4">
          <FashionDelete id={id} />
        </div>
      </div>

      <Link to='/fashion'>
        <div className="flex justify-end">
          <button className="btn btn-outline btn-circle m-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </Link>
    </div>
  )
}
