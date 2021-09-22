import React from "react";

export default function Form(props) {
  return (
    <div className="form-control">
      <form className="flex flex-col mx-auto mt-6 w-56" onSubmit={props.handleSubmit}>
        <h1 className="text-gray-700 text-2xl text-center font-normal leading-relaxed">Add Your Delights:</h1>
        <label className="label mt-4">
          <span className="label-text text-base text-gray-700">Title</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Artist</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.artist}
          onChange={(e) => props.setArtist(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Origin</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.origin}
          onChange={(e) => props.setOrigin(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Year</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.year}
          onChange={(e) => props.setYear(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Size</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.size}
          onChange={(e) => props.setSize(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Medium</span></label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          type="text"
          value={props.medium}
          onChange={(e) => props.setMedium(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text text-base text-gray-700">Image</span>
        </label>
        <input
          type="text"
          className="input input-bordered border-2 border-soft-orange"
          value={props.image}
          onChange={(e) => props.setImage(e.target.value)}
        />
        <br />
        <button className="font-mono text-lg tracking-wide font-light bg-medium-blue text-yellow-50 hover:bg-blue-300 border-blue-200 text-md border-2 mt-4 py-1 px-4 rounded-full">
          {props.type}</button>
      </form>
    </div>
  );
}