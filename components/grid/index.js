import { checkStatus } from "../../util/";
import { css } from "emotion";
import Failed from "../Failed";

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

const renderBox = ({ key, status, title }) => {
  const style = status ? passing : failing;
  return <div key={key} title={title} className={[test, style].join(" ")} />;
};

const Grid = ({ data }) => {
  const status = checkStatus(data);

  if (!status.items.length) {
    return null;
  }

  return (
    <div className={grid}>
      {status.items.map(item => {
        return renderBox(item);
      })}
    </div>
  );
};

export default Grid;
