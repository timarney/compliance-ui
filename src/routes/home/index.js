import style from "./style";
import Grid from "../../components/grid";
import IsReady from "../../components/isReady";

const Home = () => (
  <div class={style.home}>
    <IsReady />
    <Grid />
  </div>
);

export default Home;
