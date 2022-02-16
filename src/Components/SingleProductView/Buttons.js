import styled from "styled-components";

const OptionButton = styled.div`
  box-sizing: border-box;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.available ? "pointer" : "default")};
  border-radius: 10px;

  background-color: ${(props) => (props.active ? "black" : props.available ? "white" : "#E5E5E5")};
  color: ${(props) => (props.active ? "white" : props.available ? "black" : "#AEAEAE")};
  border: solid 1px ${(props) => (props.active ? "black" : props.available ? "grey" : "#E5E5E5")};
`;

const SizeButton = styled(OptionButton)`
  width: 3.5rem;
`;

const WidthButton = styled(OptionButton)`
  width: 6rem;
`

const SubmitButton = styled(OptionButton)`
  width: 100%;
  background-color: black;
  border: 1px solid black;
  color: white;
  margin-top: 2rem;
  cursor: pointer;
`;

export { SizeButton, WidthButton, SubmitButton };
