import { checkStatus } from "../util";
import { css } from "emotion";
import Link from "next/link";

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
  cursor: pointer;
`;

const passing = css`
  background-color: #01ff70;
`;

const failing = css`
  background-color: #ff4136;
`;

const renderBox = ({ index, key, status, title = "" }, link) => {
  const style = status ? passing : failing;
  const box = (
    <div title={title} key={key} className={[test, style].join(" ")} />
  );
  const url = `/controls/${key}`;

  if (link) {
    if (typeof window != "undefined") {
      const Tooltip = require("reactip");

      return (
       
          <Tooltip key={index} placement="top" event="hover" tooltip={title}>
           <div>
            <Link  as={url} href={`/details?control=${key}`}>
              {box}
            </Link>
            </div>
          </Tooltip>
       
      );
    } else {
      //ssr no js
      return (
        <a key={key} href={url}>
          {box}
        </a>
      );
    }
  }

  return box;
};

const Grid = ({ data, link = false }) => {
  const status = checkStatus(data);

  if (!status.items.length) {
    return null;
  }

  const items = status.items;

  return (
    <div className={grid}>
      {items.map(item => {
        return renderBox(item, link);
      })}
    </div>
  );
};

export default Grid;
