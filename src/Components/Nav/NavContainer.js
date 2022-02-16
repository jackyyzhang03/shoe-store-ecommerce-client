import styled from "styled-components";

const NavContainer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  margin-bottom: 4rem;
  padding: 1rem;
  border-bottom: 2px solid rgb(245, 245, 245);

  .links {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
  
  .left {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    column-gap: 10%;
  }

  .center {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  a {
    display: inline-flex;
    color: black;
    text-decoration: none;
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`

export default NavContainer;