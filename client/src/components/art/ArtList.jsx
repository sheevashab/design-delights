import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/art`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArtList() {

  const [art, setArt] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArt = async () => {
      const res = await axios.get(URL, config);
      setArt(res.data.records);
      setLoading(false);
    };
    fetchArt();
  }, []);

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="h-screen w-full overflow-auto">
      <div className="md:grid md:grid-cols-3 md:justify-evenly md:m-10">
        {art.map((pieces, index) => {
          return (
            <div className="container flex flex-col place-items-center text-center" key={index}>
              <Link to={`/art/${pieces.id}`}>
                <img className="w-56 mt-8 rounded-3xl border-4 border-medium-orange" src={pieces.fields.image} alt="artwork thumbnail" />
              </Link>
              <Link to={`/art/${pieces.id}`}>
                <button className="font-semibold text-lg border-2 border-medium-orange rounded-3xl px-2 m-2 mt-4">{pieces.fields.title}</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to='/art/new'>
        <div className="flex justify-center text-gray-700 text-center mt-6 font-bold">
          <button className="btn btn-outline mb-4">
            Add Thoughtfully</button>
        </div>
      </Link>
    </div>
  );
}