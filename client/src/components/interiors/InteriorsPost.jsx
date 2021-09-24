import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import InteriorsForm from "./InteriorsForm"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/interiors`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function InteriorsPost() {
  const [productName, setProductName] = useState("");
  const [designer, setDesigner] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      productName,
      designer,
      year,
      image,
    };
    const res = await axios.post(URL, { fields }, config);
    history.push('/interiors');
    console.log(res.data);
  };

  return (
    <div>
      <InteriorsForm
        productName={productName}
        setProductName={setProductName}
        designer={designer}
        setDesigner={setDesigner}
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
