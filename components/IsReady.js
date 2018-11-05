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
  margin: 0.5em 0 0;
`;

const stats = css`
  display: flex;
  justify-content: center;
  font-size: 1em;
  margin: 0 0 1.5em 0;
  font-weight:bold;
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
  const status = checkStatus(data);
  return (
    <div>
      {status.passed === status.total ? <Yes /> : <No />}
      <div className={stats}>
        {status.passed} of {status.total} passing
      </div>
    </div>
  );
};

export default IsReady;
