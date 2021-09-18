import axios from "axios";
import React from "react";
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
    const fetchArt = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setArt(res.data);
      setLoading(false);
    };
    fetchArt();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>Title:</h3>
      <h4>{art.fields?.title}</h4>
    </div>
  )
}
