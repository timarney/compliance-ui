import style from "./style";
import { checkStatus } from "../../util/";

const Yes = () => {
  return (
    <div class={style.isReady}>
      <h2 class={style.isReadyText}>
        Yes
        <i>🎉</i>
      </h2>
    </div>
  );
};

const No = () => {
  return (
    <div class={style.isReady}>
      <h2 class={style.isReadyText}>
        No
        <i>💩</i>
      </h2>
    </div>
  );
};

const IsReady = ({ data }) => {
  return checkStatus(data).allPassed ? <Yes /> : <No />;
};

export default IsReady;
