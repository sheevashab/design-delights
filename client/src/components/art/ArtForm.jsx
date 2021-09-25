import React from "react";

export default function ArtForm(props) {
  return (
    <div className="form-control my-6 lg:my-24">
      <form className="flex flex-col mx-auto bg-soft-yellow rounded-xl px-12 py-6"
        onSubmit={props.handleSubmit}>

        <h1 className="text-gray-700 text-2xl text-center font-normal leading-relaxed">
          Add Your Delights:
        </h1>

        <label className="label mt-4">
          <span className="label-text text-base text-gray-700">Title</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Artist</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.artist}
          onChange={(e) => props.setArtist(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Origin</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.origin}
          onChange={(e) => props.setOrigin(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Year</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.year}
          onChange={(e) => props.setYear(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Size</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.size}
          onChange={(e) => props.setSize(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Medium</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          type="text"
          value={props.medium}
          onChange={(e) => props.setMedium(e.target.value)} />
        <br />

        <label className="label">
          <span className="label-text text-base text-gray-700">Image</span>
        </label>
        <input
          type="text"
          className="input input-bordered border-2 border-soft-orange bg-yellow-50"
          value={props.image}
          onChange={(e) => props.setImage(e.target.value)} />
        <br />

        <button className="btn btn-outline text-gray-700 text-center font-bold mt-6 mb-4 self-center">
          {props.type}
        </button>
      </form>
    </div>
  );
}