import styled from "styled-components";
import { FaMap } from "react-icons/fa";

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
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media screen and (min-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Article = styled.article`
  transition: all 0.3s linear;
  background: hsl(210, 36%, 96%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const DivContainer = styled.div`
  position: relative;
  & img {
    height: 15rem;
    object-fit: cover;
  }
  & p {
    position: absolute;
    right: 0;
    bottom: 0;
    background: hsl(184, 80%, 74%);
    color: hsl(184, 91%, 17%);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0;
  }
`;

const DivInfo = styled.div`
  padding: 1.25rem 1.5rem;
  & div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & p {
      margin-bottom: 0.75rem;
      line-height: 1.25;
      color: hsl(211, 27%, 70%);
    }
    & h4 {
      margin-bottom: 0.75rem;
      line-height: 1.25;
    }
  }
`;

const DivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  & p {
    line-height: 0;
    margin-bottom: 0;
    text-transform: capitalize;
    color: hsl(185, 62%, 45%) !important;
    & span {
      margin-right: 0.25rem;
    }
  }
`;

export const AllFeature = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: <FaMap />,
    place: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    title: "best of java",
    date: "october 1th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: <FaMap />,
    place: "indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    title: "explore hong kong",
    date: "september 15th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: <FaMap />,
    place: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    title: "kenya highlights",
    date: "december 5th, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: <FaMap />,
    place: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];

function Featured() {
  return (
    <>
      <Section id="tours">
        <SectionTitle>
          <h2>
            featured <span>tours</span>
          </h2>
        </SectionTitle>

        <Div>
          {AllFeature.map((vl, index) => (
            <Article key={vl.id}>
              <DivContainer>
                <img src={`./images/tour-${index + 1}.jpeg`} alt="" />
                <p>{vl.date}</p>
              </DivContainer>
              <DivInfo>
                <div>
                  <h4>{vl.title}</h4>
                </div>
                <p>{vl.description}</p>
                <DivFooter>
                  <p>
                    <span>{vl.icon}</span>
                    {vl.place}
                  </p>
                  <p>{vl.days}</p>
                  <p>{vl.price}</p>
                </DivFooter>
              </DivInfo>
            </Article>
          ))}
        </Div>
      </Section>
    </>
  );
}

export default Featured;
