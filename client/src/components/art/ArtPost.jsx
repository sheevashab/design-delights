import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Form"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/art`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArtPost() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [origin, setOrigin] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      artist,
      origin,
      year,
      medium,
      size,
      image,
    };
    const res = await axios.post(URL, { fields }, config);
    history.push(`/art/${res.data.id}`);
    console.log(res.data);
  };

  return (
    <div className="AddForm">
      <h2>What brings you delight?</h2>
      <Form
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        origin={origin}
        setOrigin={setOrigin}
        year={year}
        setYear={setYear}
        medium={medium}
        setMedium={setMedium}
        size={size}
        setSize={setSize}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  )
}
