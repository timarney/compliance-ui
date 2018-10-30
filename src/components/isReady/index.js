import style from "./style";

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

const IsReady = () => {
  return <Yes />;
};

export default IsReady;
