import styled from "styled-components";
import LinkBtn from "../ui/LinkBtn";

const Section = styled.section`
  min-height: 100vh;
  background: hsl(185, 62%, 45%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    background:
      linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url("../images/main.jpeg") center/cover no-repeat;
  }
`;
const Div = styled.div`
  text-align: center;
  color: #fff;
  padding: 0 3rem;

  & h1 {
    text-transform: uppercase;
  }
  & p {
    max-width: 35rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    letter-spacing: 0.25rem;
  }
  @media screen and (min-width: 768px) {
    padding: 0;

    & p {
      max-width: 45rem;
    }
  }
`;

function Header() {
  return (
    <>
      <Section id="home">
        <Div>
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <LinkBtn />
        </Div>
      </Section>
    </>
  );
}

export default Header;
