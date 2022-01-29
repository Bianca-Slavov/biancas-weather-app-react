import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          className="search-buttons"
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
        />
        <button className="search-buttons">
          <i className="fas fa-search"></i>
        </button>
        <button className="search-buttons">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
