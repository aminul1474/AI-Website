import styled from "styled-components";
import NavList from "../ui/NavList";
import SocialLink from "../ui/SocialLink";
import { FaBars } from "react-icons/fa";

const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  height: 4rem;
  display: flex;
  align-items: center;
`;
const DivCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* optional */
    flex-wrap: wrap;
  }
`;
const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 992px) {
    padding: 0 0;
  }
`;
const NavBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: hsl(185, 62%, 45%);
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

function Nav() {
  return (
    <>
      <NavStyle>
        <DivCenter>
          <DivHeader>
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <NavBtn type="button" id="nav-toggle">
              <FaBars />
            </NavBtn>
          </DivHeader>
          {/* <!-- left this comment on purpose --> */}
          <NavList />

          <SocialLink />
        </DivCenter>
      </NavStyle>
    </>
  );
}

export default Nav;
