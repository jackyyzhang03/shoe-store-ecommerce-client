import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GalleryContainer from "./GalleryContainer";
import GalleryItem from "./GalleryItem";
import Image from "../Image/Image";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from server.
  // TODO: Extract URL to variable.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4242/products");
      const products = await response.json();
      setProducts(products.shoes);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <GalleryContainer>
    <h1>Men</h1>
    <div className="gallery">
      {products.map((product) => (
        <Link
          style={{ textDecoration: "none" }}
          key={product.productId}
          to={"/products/" + product.productId}
        >
          <GalleryItem>
            <Image src={product.images[0]} />
            <h3>{product.name}</h3>
            <p>${(product.priceInCents / 100).toFixed(2)}</p>
          </GalleryItem>
        </Link>
      ))}
    </div>
    </GalleryContainer>
  );
};

export default ProductGallery;
