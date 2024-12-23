import React from "react";
import buildingsImage from "../build.png";
import "../Building.css";

function Buildings() {
  return (
    <div className="buildings-section">
      <div className="buildings-wrapper">
        <img
          src={buildingsImage}
          alt="Buildings"
          className="buildings-image"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
}

export default Buildings;
