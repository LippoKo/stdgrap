import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location">
      <h1 className="square-h1"> LOCATION</h1>
      <div className="square">
        <p>12 Upper St. Martin's Lane WC2H 9FB, London</p>
      </div>
      <figure className="pin">
        <img src="/images/location-icon.png" alt="pin" />
      </figure>
    </div>
  );
}

export default Location;
