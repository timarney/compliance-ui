import { css } from "emotion";
import { checkStatus } from "../util";

const container = css`
  display: flex;
  justify-content: center;
`;

const isReadyText = css`
  font-size: 6em;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.5em 1em;
`;

const Yes = () => {
  return (
    <div className={container}>
      <h2 className={isReadyText}>Yes 🎉</h2>
    </div>
  );
};

const No = () => {
  return (
    <div className={container}>
      <h2 className={isReadyText}>No 💩</h2>
    </div>
  );
};

const IsReady = ({ data }) => {
  return checkStatus(data).allPassed ? <Yes /> : <No />;
};

export default IsReady;
