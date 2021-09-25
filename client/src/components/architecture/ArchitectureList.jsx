import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/architecture`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function ArchitectureList() {

  const [architecture, setArchitecture] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArchitecture = async () => {
      const res = await axios.get(URL, config);
      setArchitecture(res.data.records);
      setLoading(false);
    };
    fetchArchitecture();
  }, []);

  if (loading) {
    return (
      <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
    )
  }

  return (
    <div className="h-screen w-full overflow-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly md:m-10">
        {architecture.map((building, index) => {
          return (
            <div className="flex flex-col place-items-center text-center" key={index}>
              <Link to={`/architecture/${building.id}`}>
                <img className="w-60 mt-8 rounded-3xl border-4 border-medium-orange"
                  src={building.fields.image} alt="building thumbnail" />
              </Link>

              <Link to={`/architecture/${building.id}`}>
                <button className="font-medium text-gray-700 text-lg border-2 border-soft-yellow rounded-lg px-2 m-2 mt-3 w-xl hover:bg-soft-yellow">
                  {building.fields.title}
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      <Link to='/architecture/new'>
        <div className="flex justify-center text-gray-700 text-center mt-6 font-bold">
          <button className="btn btn-outline mb-4">
            Add Thoughtfully</button>
        </div>
      </Link>
    </div>
  );
}