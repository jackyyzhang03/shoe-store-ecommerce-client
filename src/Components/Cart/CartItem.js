import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// TODO: Extract component.
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: rgb(245, 245, 245);

  img {
    width: 100%;
    height: 100%;
  }

  .image-container {
    padding: 1rem;
  }

  .content {
    padding: 1rem;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-options {
    display: inline-flex;
    align-items: center;
    column-gap: 1.4rem;
  }

  .item-details {
    margin-top: 2rem;
  }

  a,
  button,
  a:visited {
    all: unset;
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }

  h2 {
    line-height: 1rem;
  }

  p {
    margin-top: 0;
  }
`;

const CartItem = (props) => {
  return (
    <ItemContainer>
      <div className="image-container">
        <img src={props.item.images[0]} alt={props.item.name} />
      </div>
      <div className="content">
        <div className="row">
          <div>
            <h2>{props.item.name}</h2>
            <b>
              $
              {((props.item.quantity * props.item.priceInCents) / 100).toFixed(
                2
              )}
            </b>
          </div>
          <div className="item-options">
            <Link
              to={"/products/" + props.item.productId}
              state={{
                isEditing: true,
                initialSize: props.item.size,
                initialWidth: props.item.width,
                initialQuantity: props.item.quantity,
                index: props.index,
              }}
            >
              Edit
            </Link>
            <button onClick={props.handleRemove}>Remove</button>
          </div>
        </div>
        <div className="item-details">
          <p>Colour: {props.item.colour}</p>
          <p>
            Size: {props.item.size} {props.item.width}
          </p>
          <p>Quantity: {props.item.quantity}</p>
        </div>
      </div>
    </ItemContainer>
  );
};

export default CartItem;
