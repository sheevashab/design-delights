import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/fashion`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function FashionList() {

  const [fashion, setFashion] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFashion = async () => {
      const res = await axios.get(URL, config);
      setFashion(res.data.records);
      setLoading(false);
    };
    fetchFashion();
  }, []);

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="h-screen w-full overflow-auto">
      <div>
        {fashion.map((styles, index) => {
          return (
            <div className="flex flex-col place-items-center text-center md:flex-wrap"
              key={index}>
              <Link to={`/fashion/${styles.id}`}>
                <img className="w-56 mt-8 rounded-3xl border-4 border-medium-orange"
                  src={styles.fields.image} alt="fashion thumbnail" />
              </Link>
              <Link to={`/fashion/${styles.id}`}>
                <button className="font-semibold text-lg border-2 border-medium-orange rounded-3xl px-2 m-2 mt-4">{styles.fields.designer}</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to='/new'>
        <div className="flex justify-center text-gray-700 text-center mt-6 font-bold">
          <button className="btn btn-outline mb-4">
            Add Thoughtfully</button>
        </div>
      </Link>
    </div>
  );
}