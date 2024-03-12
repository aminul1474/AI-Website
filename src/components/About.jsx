import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  scroll-margin-top: 4rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  & h2 {
    text-transform: uppercase;
  }

  & span {
    color: hsl(185, 62%, 45%);
  }
`;

const Div = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;
const DivImg = styled.div`
  margin-bottom: 0;
  @media screen and (min-width: 1170px) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.5rem solid hsl(185, 62%, 45%);
      box-sizing: border-box;
      top: -1.5rem;
      left: -1.5rem;
    }
  }
`;

const BtnA = styled.a`
  text-transform: uppercase;
  background: hsl(185, 62%, 45%);
  color: #fff;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  /* font-weight: 700; */
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
`;

function About() {
  return (
    <>
      <Section id="about">
        <SectionTitle>
          <h2>
            about <span>us</span>
          </h2>
        </SectionTitle>

        <Div>
          <DivImg>
            <img
              src="./images/about.jpeg"
              className=" relative"
              alt="awesome beach"
            />
          </DivImg>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <BtnA href="#">read more</BtnA>
          </article>
        </Div>
      </Section>
    </>
  );
}

export default About;
