import styled from "styled-components";

const GalleryContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 1rem;
  }
`;

export default GalleryContainer;
