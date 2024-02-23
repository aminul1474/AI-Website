import styled from "styled-components";

const Progress = styled.progress`
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  grid-column: 1 / -1;

  &::-webkit-progress-bar {
    background-color: #ced4da;
    border-radius: 100px;
  }
  &::-webkit-progress-value {
    background-color: #1098ad;
    border-radius: 100px;
  }
`;

function ProgressBar() {
  return <Progress max={10} value={5} />;
}

export default ProgressBar;
