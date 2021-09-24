import React from "react";

export default function FashionForm(props) {
  return (
    <div className="form-control">
      <form className="flex flex-col mx-auto mt-6 bg-soft-yellow rounded-xl px-12 py-6" onSubmit={props.handleSubmit}>
        <h1 className="text-gray-700 text-2xl text-center font-normal leading-relaxed">Add Your Delights:</h1>

        <label className="label mt-4">
          <span className="label-text text-base text-gray-700">Designer</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.designer}
          onChange={(e) => props.setDesigner(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Website</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.website}
          onChange={(e) => props.setWebsite(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Image</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.image}
          onChange={(e) => props.setImage(e.target.value)}
        />
        <br />

        <button className="btn btn-outline text-gray-700 text-center font-bold mt-6 mb-4 self-center">
          {props.type}</button>
      </form>
    </div>
  );
}