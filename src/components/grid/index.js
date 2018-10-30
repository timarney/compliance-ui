import style from "./style";
const items = [{ pass: true }, { pass: true }];

const checkPassed = data => {
  if (data && data.verifications && data.verifications.passed) {
    return data.verifications.passed;
  }

  return false;
};

const checkStatus = data => {
  if (!data || !data.ITSG33a) {
    return;
  }

  const d = data.ITSG33a;

  return Object.keys(d).map(key => {
    const status = checkPassed(d[key]) ? style.passing : style.failing;
    return <div class={[style.test, status].join(" ")} />;
  });
};

const Grid = ({ data }) => {
  return <div class={style.grid}>{checkStatus(data)}</div>;
};

export default Grid;
