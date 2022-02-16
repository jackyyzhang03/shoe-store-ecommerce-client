import styled from "styled-components";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  max-width: 1000px;
  margin: auto;

  svg {
    cursor: pointer;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  img {
    width: 100%;
  }

  .image-container {
    background-color: rgb(245, 245, 245);
    padding: 2rem;
  }

  .product-details {
    padding: 2rem;
  }

  .options {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem 0.5rem;
  }

  h1 {
    margin-bottom: 0.6rem;
  }
`;

export default ProductContainer;