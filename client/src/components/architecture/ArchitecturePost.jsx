import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import ArchitectureForm from "./ArchitectureForm"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/architecture`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArchitecturePost() {
  const [title, setTitle] = useState("");
  const [architect, setArchitect] = useState("");
  const [location, setLocation] = useState("");
  const [style, setStyle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      architect,
      location,
      style,
      year,
      image,
    };
    const res = await axios.post(URL, { fields }, config);
    history.push('/architecture');
    console.log(res.data);
  };

  return (
    <div>
      <ArchitectureForm
        title={title}
        setTitle={setTitle}
        architect={architect}
        setArchitect={setArchitect}
        location={location}
        setLocation={setLocation}
        style={style}
        setStyle={setStyle}
        year={year}
        setYear={setYear}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  )
}