
import styled from "styled-components";

const QuantitySelectorContainer = styled.div`
  border: 1px solid black;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  height: 2.4rem;
  border-radius: 10px;
  width: 100%;

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .counter {
    background-color: white;
    color: black;
    flex: 1;
  }

  .button {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    cursor: pointer;
  }
`;

export default  QuantitySelectorContainer;