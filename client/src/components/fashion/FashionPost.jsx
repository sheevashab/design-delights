import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import FashionForm from "./FashionForm"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/fashion`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function FashionPost() {
  const [designer, setDesigner] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      designer,
      website,
      image,
    };
    const res = await axios.post(URL, { fields }, config);
    history.push('/fashion');
    console.log(res.data);
  };

  return (
    <div className="AddForm">
      <FashionForm
        designer={designer}
        setDesigner={setDesigner}
        website={website}
        setWebsite={setWebsite}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  )
}


