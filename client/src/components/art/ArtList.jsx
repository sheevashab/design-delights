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
      <div className="Arttags">
        {art.map((pieces, index) => {
          return (
            <div key={index}>
              <Link to={`/art/${pieces.id}`} key={pieces.id}>
                <img className="image" src={pieces.fields.image} alt="artwork image" />
              </Link>
              <h4>{pieces.fields.title}</h4>
              <h4>{pieces.fields.artist}</h4>
              <h4>{pieces.fields.origin}</h4>
              <h4>{pieces.fields.year}</h4>
              <h4>{pieces.fields.medium}</h4>
              <h4>{pieces.fields.size}</h4>
            </div>
          );
        })}
      </div>
      <Link to='/new'>Add New Art</Link>
    </div>
  );
}
