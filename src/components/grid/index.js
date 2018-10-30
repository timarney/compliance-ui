import style from "./style";
import { checkStatus } from "../../util/";
const Grid = ({ data }) => {
  return <div class={style.grid}>{checkStatus(data, style).elements}</div>;
};

export default Grid;
