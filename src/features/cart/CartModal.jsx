import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
  width: 16rem;
  height: 15rem;
`;
const Overlay = styled.div`
  position: absolute;
  top: 115px;
  right: 150px;
  width: 20rem;
  height: 35vh;
  background-color: #fff;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  border-radius: 2px 2px 5px 5px;
  border-top: 2px solid #fed700;
  color: #333e48;
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  /* border: 1px solid rgba(0, 0, 0, 0.15); */
  box-shadow: 0 0.125rem 0.312rem rgba(0, 0, 0, 0.28);
  overflow: scroll;
`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 7rem;
  right: 11rem;
  color: var(--color-grey-100);
  z-index: 1000000;

  &:hover {
    color: #fed700;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function CartModal({ children, setShow }) {
  const domElement = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (domElement.current && !domElement.current.contains(e.target)) {
        //console.log("click out side");
        setShow((bl) => !bl);
      }
    }
    //!3rd argument stop bubbleing up
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [setShow]);

  return createPortal(
    <>
      <Button onClick={() => setShow((bl) => !bl)}>
        <HiXMark />
      </Button>
      <Overlay ref={domElement}>
        <StyledModal>
          <div>{children}</div>
        </StyledModal>
      </Overlay>
    </>,
    document.body,
  );
}

export default CartModal;
