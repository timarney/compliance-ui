import style from "./style";

const items = [{ pass: true }, { pass: true }];

const checks = () => {
  return items.map(item => {
    const status = item.pass ? style.passing : style.failing;
    return <div class={[style.test, status].join(" ")}>{item}</div>;
  });
};

const Grid = () => {
  return <div class={style.grid}>{checks()}</div>;
};

export default Grid;
