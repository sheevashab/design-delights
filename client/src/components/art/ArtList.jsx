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
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="flex-col items-center justify-center mt-8 text-center">
        {art.map((pieces, index) => {
          return (
            <div key={index}>
              <Link to={`/art/${pieces.id}`} key={pieces.id}>
                <img className="flex items-center justify-center w-3/4 rounded-full" src={pieces.fields.image} alt="artwork thumbnail" />
              </Link>
              <div className="flex-row-wrap">
                <h3 className="font-semibold">{pieces.fields.title}</h3>
                <h4>{pieces.fields.artist}</h4>
                <h4>{pieces.fields.origin}</h4>
                <h4>{pieces.fields.year}</h4>
                <h4>{pieces.fields.medium}</h4>
                <h4>{pieces.fields.size}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <Link to='/new'>Add New Art</Link>
    </div>
  );
}
