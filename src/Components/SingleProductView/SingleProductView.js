import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductContainer from "./ProductContainer";
import ColourSwatch from "./ColourSwatch";
import { SizeButton, WidthButton, SubmitButton } from "./Buttons";
import { fetchProductById } from "../../Services/products.service";
import { addCartItem, updateCartItem } from "../../Services/cart.service";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";

const SingleProductView = () => {
  const initialState = useLocation().state;
  const {
    isEditing = false,
    initialSize,
    initialWidth,
    initialQuantity = 1,
    index,
  } = initialState || {};

  const { id } = useParams(); // Get productID from route.
  const [product, setProduct] = useState();
  const [selectedSize, setSize] = useState();
  const [selectedWidth, setWidth] = useState();
  const [isLoading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState();

  // Load the product information from the server.
  useEffect(() => {
    async function fetchData() {
      const product = await fetchProductById(id);
      setProduct(product);
      if (initialSize) {
        setSize(initialSize);
      } else {
        setSize(product.availableSizes[0]);
      }
      if (initialWidth) {
        setWidth(initialWidth);
      } else {
        setWidth(product.availableWidths[0]);
      }
      if (initialQuantity) {
        setQuantity(initialQuantity);
      } else {
        setQuantity(1);
      }
      setLoading(false);
    }
    fetchData();
  }, [id, initialQuantity, initialWidth, initialSize]);

  const selectSize = (size) => {
    if (product.availableSizes.includes(size)) {
      setSize(size);
    }
  };

  const selectWidth = (width) => {
    if (product.availableWidths.includes(width)) {
      setWidth(width);
    }
  };

  const handleUpdateQuantity = (quantity) => {
    if (quantity >= 0) {
      setQuantity(quantity);
    }
  };

  const handleAddItem = () => {
    handleUpdateItem();
    // TODO: Implement popup.
    alert("Product added!");
  };

  // onClick handler to add item to the cart.
  const handleUpdateItem = () => {
    const item = {
      productId: product.productId,
      name: product.name,
      priceInCents: product.priceInCents,
      quantity: quantity,
      colour: product.colour,
      size: selectedSize,
      width: selectedWidth,
      images: product.images,
    };

    // TODO: Extract to util module.
    const persistedCart = JSON.parse(localStorage.getItem("cart"));
    if (persistedCart) {
      if (isEditing) {
        updateCartItem(item, index, persistedCart);
      } else {
        addCartItem(item, persistedCart);
      }
      localStorage.setItem("cart", JSON.stringify(persistedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
    }
  };

  // TODO: Implement loading spinner.
  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <ProductContainer>
      <div className="image-container">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <span>${(product.priceInCents / 100).toFixed(2)}</span>
        <p>
          <span>Colour:</span> {product.colour}
        </p>
        {product.availableColours.map((colour) => (
          <ColourSwatch
            key={colour.name}
            colour={colour.displayColour}
            active={colour.name === product.colour}
            productId={colour.productId}
          >
            {colour.name}
          </ColourSwatch>
        ))}
        <p>
          <span>Size:</span>
        </p>
        <div className="options">
          {product.sizes.map((size) => (
            <SizeButton
              key={size}
              active={size === selectedSize}
              onClick={() => selectSize(size)}
              available={product.availableSizes.includes(size)}
            >
              {size}
            </SizeButton>
          ))}
        </div>
        <p>
          <span>Width:</span>
        </p>
        <div className="options">
          {product.widths.map((width) => (
            <WidthButton
              key={width}
              active={width === selectedWidth}
              available={product.availableWidths.includes(width)}
              onClick={() => selectWidth(width)}
            >
              {width}
            </WidthButton>
          ))}
        </div>
        {isEditing ? (
          <>
            <p>
              <span>Quantity:</span>
            </p>
            <QuantitySelector
              quantity={quantity}
              updateQuantity={handleUpdateQuantity}
            />
            <Link to="/cart">
              <SubmitButton onClick={handleUpdateItem}>
                {quantity > 0 ? "Update Item" : "Remove Item"}
              </SubmitButton>
            </Link>
          </>
        ) : (
          <SubmitButton onClick={handleAddItem}>Add to Bag</SubmitButton>
        )}
      </div>
    </ProductContainer>
  );
};

export default SingleProductView;
