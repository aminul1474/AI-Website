import styled from "styled-components";
import SocialLink from "../ui/SocialLink";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;
const A = styled.a`
  color: #fff;
  text-transform: capitalize;
  font-size: 1rem;
  margin-right: 1rem;
  letter-spacing: 0.25rem;
  transition: all 0.3s linear;
  &:hover {
    color: hsl(185, 62%, 45%);
  }
`;

const Ft = styled.footer`
  padding: 5rem 0;
  scroll-margin-top: 4rem;
  background: hsl(209, 61%, 16%);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;
const P = styled.p`
  text-transform: capitalize;
  letter-spacing: 0.25rem;
  color: #fff;
  & span {
    margin-left: 0.5rem;
  }
`;

function Footer() {
  return (
    <>
      <Ft>
        <Ul>
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
            <A href="#featured">featured</A>
          </li>
        </Ul>
        <Div>
          <SocialLink />
        </Div>
        <P>
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </P>
      </Ft>
    </>
  );
}

export default Footer;
