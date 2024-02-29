import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Button = styled.button`
  border-radius: 12px;
  background-color: #edf2ff;
  padding: 12px 24px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #364fc7;
  transition: all 0.3s;

  &:hover {
    background-color: #364fc7;
    color: #fff;
  }

  ${({ open }) =>
    open &&
    `
    background-color: #364fc7;
    color: #fff;
  `}
`;
const Div = styled.div`
  background-color: #edf2ff;
  padding: 32px;
  border-radius: 12px;

  & h4 {
    font-size: 20px;
    margin-bottom: 16px;
    color: #364fc7;
  }
  & h4 {
    font-size: 18px;
  }
`;
const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;

  & button {
    background: none;
    text-decoration: underline;
    color: #4c6ef5;
    font-size: 14px;
  }
`;

const tabContext = createContext();

function TabCCP({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <tabContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </tabContext.Provider>
  );
}

function Tab({ number }) {
  const { activeTab, setActiveTab } = useContext(tabContext);
  const bool = activeTab === number;
  return (
    <Button open={bool} onClick={() => setActiveTab(number)}>
      Tab {number + 1}
    </Button>
  );
}

function TabContent() {
  const [showDetails, setShowDetails] = useState(true);
  const { activeTab } = useContext(tabContext);

  return (
    <Div>
      <h4>{content.at(activeTab).summary}</h4>
      {showDetails && <p>{content.at(activeTab).details}</p>}

      <Div2>
        <button
          className=" flex items-end "
          onClick={() => setShowDetails((h) => !h)}
        >
          <span> {showDetails ? "Hide" : "Show"} details </span>
          <span>
            <IoMdArrowDropdown
              className={`size-5 transition-all duration-300 ${showDetails ? "rotate-180" : ""} `}
            />
          </span>
        </button>
      </Div2>
    </Div>
  );
}

TabCCP.Tab = Tab;
TabCCP.TabContent = TabContent;

export default TabCCP;
