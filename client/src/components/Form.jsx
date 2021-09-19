import React from "react";

export default function Form() {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <br />
      <label>Artist</label>
      <input
        type="text"
        value={props.artist}
        onChange={(e) => props.setArtist(e.target.value)}
      />
      <br />
      <label>Origin</label>
      <input
        type="text"
        value={props.origin}
        onChange={(e) => props.setOrigin(e.target.value)}
      />
      <br />
      <label>Year</label>
      <input
        type="text"
        value={props.year}
        onChange={(e) => props.setYear(e.target.value)}
      />
      <br />
      <label>Medium</label>
      <input
        type="text"
        value={props.medium}
        onChange={(e) => props.setMedium(e.target.value)}
      />
      <br />
      <label>Size</label>
      <input
        type="text"
        value={props.size}
        onChange={(e) => props.setSize(e.target.value)}
      />
      <br />
      <label>Image</label>
      <input
        type="text"
        value={props.image}
        onChange={(e) => props.setImage(e.target.value)}
      />
      <br />
      <button>{props.type} Add</button>
    </form>
  );
}