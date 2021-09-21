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
      console.log(res.data.records);
      setLoading(false);
    };
    fetchArt();
  }, []);

  if (loading) {
    return <button type="button" className="bg-rose-600 ..." >
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading
    </button>
  }

  return (
    <div>
      <div>
        {art.map((pieces, index) => {
          return (
            <div className="flex flex-col place-items-center text-center" key={index}>
              <Link to={`/art/${pieces.id}`} key={pieces.id}>
                <img className="place-content-center w-48 mt-8 rounded-3xl border-4 border-medium-orange" src={pieces.fields.image} alt="artwork thumbnail" />
              </Link>
              <Link to={`/art/${pieces.id}`} key={pieces.id}>
                <button className="font-semibold text-lg border-2 border-medium-orange rounded-3xl px-2 m-2 mt-4">{pieces.fields.title}</button>
              </Link>
              <div className="text-gray-700 font-normal leading-snug">
                <h4>{pieces.fields.artist}</h4>
                <h4>{pieces.fields.origin}</h4>
                <h4>{pieces.fields.year}</h4>


              </div>
            </div>
          );
        })}
      </div>
      <Link to='/new'>
        <button className="place-content-center font-mono text-lg tracking-wide font-light bg-medium-blue text-yellow-50 hover:bg-blue-300 border-blue-200 text-md border-2 mt-4 py-1 px-4 rounded-full">
          Add<br />Thoughtfully</button>
      </Link>
    </div>
  );
}
