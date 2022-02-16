import React from "react";
import ImageContainer from "./ImageContainer";

const Image = (props) => {
  return (
    <ImageContainer>
      <img src={props.src} alt={props.alt} />
    </ImageContainer>
  );
};

export default Image;
