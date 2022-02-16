import React from "react";
import QuantitySelectorContainer from "./QuantitySelectorContainer";

const QuantitySelector = (props) => {
  return (
    <QuantitySelectorContainer>
      <div
        className="button"
        onClick={() => props.updateQuantity(props.quantity - 1)}
      >
        -
      </div>
      <div className="counter">{props.quantity}</div>
      <div
        className="button"
        onClick={() => props.updateQuantity(props.quantity + 1)}
      >
        +
      </div>
    </QuantitySelectorContainer>
  );
};

export default QuantitySelector;