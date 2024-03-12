import styled from "styled-components";

const A = styled.a`
  padding: 0.9rem 1.6rem;
  font-size: 1.25rem;
  background: #fff;
  color: hsl(185, 62%, 45%);

  text-transform: uppercase;
  /* background: hsl(185, 62%, 45%);
  color: #fff; */
  /* padding: 0.375rem 0.75rem; */
  letter-spacing: 0.25rem;
  display: inline-block;
  /* font-weight: 700; */
  transition: all 0.3s linear;
  /* font-size: 0.875rem; */
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: transparent;
    color: #fff;
    border-color: #fff;

    /* color: hsl(184, 91%, 17%); */
    /* background: hsl(184, 80%, 74%); */
  }
`;

function LinkBtn() {
  return <A href="#tours"> explore tours</A>;
}

export default LinkBtn;
