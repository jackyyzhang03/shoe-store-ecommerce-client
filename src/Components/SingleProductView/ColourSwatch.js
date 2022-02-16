import React from "react";
import { Link } from "react-router-dom";

const ColourSwatch = (props) => {
  return (
    <Link to={"/products/" + props.productId}>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="27" r="23" fill={props.colour} />
        {props.active && <circle cx="27" cy="27" r="26.5" stroke="black" />}
      </svg>
    </Link>
  );
};

export default ColourSwatch;
