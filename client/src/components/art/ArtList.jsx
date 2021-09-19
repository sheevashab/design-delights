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
      console.log(setArt);
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
        {art.map(arts => {
          return (
            <Link to={`/art/${art.id}`} key={art.id}>
              <h4>{arts.fields.title}</h4>
              <h4>{arts.fields.artist}</h4>
              <h4>{arts.fields.origin}</h4>
              <h4>{arts.fields.year}</h4>
              <h4>{arts.fields.medium}</h4>
              <h4>{arts.fields.size}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
