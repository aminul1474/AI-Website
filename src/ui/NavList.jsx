import styled from "styled-components";

const Ul = styled.ul`
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;

  @media screen and (min-width: 992px) {
    height: auto;
    display: flex;
  }
`;

const A = styled.a`
  display: block;
  padding: 1rem 2rem;
  text-transform: capitalize;
  letter-spacing: 0.25rem;
  transition: all 0.3s linear;
  color: hsl(209, 61%, 16%);
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: (184, 91%, 17%);
    background: hsl(184, 80%, 74%);
    padding-left: 2.25rem;
  }
  @media screen and (min-width: 992px) {
    padding: 0 0;
    margin-right: 0.7rem;
    &:hover {
      padding: 0;
      color: hsl(185, 62%, 45%);
      background: transparent;
    }
  }
`;

function NavList() {
  return (
    <Ul id="nav-links">
      <li>
        <A href="#home">home</A>
      </li>

      <li>
        <A href="#about">about</A>
      </li>

      <li>
        <A href="#services">services</A>
      </li>

      <li>
        <A href="#tours">tours</A>
      </li>
    </Ul>
  );
}

export default NavList;
