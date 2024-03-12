import { GiCash } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import styled from "styled-components";

const Section = styled.section`
  background: hsl(210, 36%, 96%);
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
  }

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Article = styled.article`
  text-align: center;
  margin-bottom: 3rem;

  & span {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ServiceInfo = styled.div`
  & h4 {
    @media screen and (min-width: 1170px) {
      margin-bottom: 0.5rem;
    }
  }
  & p {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1170px) {
    padding-left: 1rem;
  }
`;

export const AllService = [
  {
    id: 1,
    title: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: <GiCash />,
  },
  {
    id: 2,
    title: "Endless Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: <LuTrees />,
  },
  {
    id: 3,
    title: "Amazing Comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: <GiClothes />,
  },
];

function Services() {
  return (
    <>
      <Section id="services">
        <SectionTitle>
          <h2>
            our <span>services</span>
          </h2>
        </SectionTitle>
        <Div>
          {AllService.map((vl) => (
            <Article key={vl.id}>
              <span>{vl.icon}</span>
              <ServiceInfo>
                <h4>{vl.title}</h4>
                <p>{vl.description}</p>
              </ServiceInfo>
            </Article>
          ))}
        </Div>
      </Section>
    </>
  );
}

export default Services;
