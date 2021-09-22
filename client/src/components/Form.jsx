import React from "react";

export default function Form(props) {
  return (
    <div className="form-control">
      <form className="flex flex-col mx-auto mt-6 w-56" onSubmit={props.handleSubmit}>
        <h1 className="text-2xl text-center font-semibold">What brings you delight?</h1>
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          className="input input-bordered border-2 border-soft-orange"
          placeholder="title"
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Artist</label>
        <input
          type="text"
          value={props.artist}
          onChange={(e) => props.setArtist(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Origin</label>
        <input
          type="text"
          value={props.origin}
          onChange={(e) => props.setOrigin(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Year</label>
        <input
          type="text"
          value={props.year}
          onChange={(e) => props.setYear(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Medium</label>
        <input
          type="text"
          value={props.medium}
          onChange={(e) => props.setMedium(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Size</label>
        <input
          type="text"
          value={props.size}
          onChange={(e) => props.setSize(e.target.value)}
        />
        <br />
        <label className="mt-6 ml-6 text-xl font-semibold">Image</label>
        <input
          type="text"
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