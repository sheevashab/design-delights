import axios from "axios";
import React from "react";
import DeleteFashion from "./FashionDelete"
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
    <div className="leading-loose text-gray-700">
      <Link to={'/fashion'}>
        <img className="sm:w-screen md:" src={fashion.fields?.image} alt="piece of fashion" />
      </Link>
      <div className="grid grid-cols-2">
        <h3 className="mt-6 ml-6 text-xl font-semibold lg:text-3xl">Designer</h3>
        <h4 className="mt-6 mr-6 text-lg font-light lg:text-2xl">{fashion.fields?.designer}</h4>
        <h3 className="mt-4 ml-6 text-xl font-semibold lg:text-3xl">Website</h3>
        <h4 className="mt-4 mr-6 text-lg font-light lg:text-2xl">{fashion.fields?.website}</h4>
      </div>
      <Link to={`/fashion/${id}/`}></Link>
      <DeleteFashion id={id} />
    </div>
  )
}
