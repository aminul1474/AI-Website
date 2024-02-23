import { createContext, useContext } from "react";
import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Pn = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ced4da;
`;
const Pti = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const DivBox = styled.div`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;

  & ul {
    color: #868e96;
    margin-left: 16px;
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
const DivItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  padding-right: 48px;
  cursor: pointer;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;

  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;

  ${({ open }) =>
    open &&
    `
    border-top: 4px solid #087f5b;
    .number,
    .title {
      color: #087f5b;
    }
  `}
`;

const accordionContext = createContext();

function AccordionCCP({ children }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <accordionContext.Provider value={{ curOpen, setCurOpen }}>
      <Div>{children}</Div>
    </accordionContext.Provider>
  );
}

function AccordionItem({ children, title, number }) {
  const { curOpen, setCurOpen } = useContext(accordionContext);

  const isOpen = number === curOpen; // isOpen = true/flase

  return (
    <DivItem
      open={isOpen}
      onClick={() => {
        setCurOpen(isOpen ? null : number);
      }}
    >
      <Pn>{number}</Pn>
      <Pti className="title">{title}</Pti>
      <Pti className="icon">{isOpen ? "-" : "+"}</Pti>
      {isOpen && <DivBox>{children}</DivBox>}
    </DivItem>
  );
}

AccordionCCP.AccordionItem = AccordionItem;

export default AccordionCCP;
