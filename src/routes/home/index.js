import { Component } from "preact";
import style from "./style";
import Grid from "../../components/grid";
import IsReady from "../../components/isReady";
import getData from "../../api";
class DataProvider extends Component {
  async componentDidMount() {
    this.setState({ data: await getData() });
  }
  render(props, state) {
    return props.children[0](state.data);
  }
}

const Home = () => (
  <div class={style.home}>
    <IsReady />
    <DataProvider>{data => <Grid data={data} />}</DataProvider>
  </div>
);

export default Home;
