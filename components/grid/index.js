import { checkStatus } from "../../util/";
import { css } from "emotion";

const grid = css`
  display: flex;
  flex-wrap: wrap;
`;

const test = css`
  border: 1px solid #fff;
  color: transparent;
  cursor: default;
  display: block;
  height: 30px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 30px;
`;

const passing = css`
  background-color: #01ff70;
`;

const failing = css`
  background-color: #ff4136;
`;

const Grid = ({ data }) => {
  return <div className={grid}>{checkStatus(data).elements}</div>;
};

export default Grid;
