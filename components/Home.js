import { allControlsStatus } from "../api/index";
import { Grid, IsReady, Failed } from "./";
export default class Home extends React.Component {
  state = { err: false, data: {} };
  async componentDidMount() {
    const result = await allControlsStatus();

    if (result instanceof Error) {
      this.setState({ err: result.message });
      return;
    }

    this.setState({ data: result });
  }
  render() {
    const { err, data } = this.state;

    if (err) {
      return <Failed />;
    }

    return (
      <div>
        <IsReady data={data} />
        <Grid data={data} link={true} />
      </div>
    );
  }
}
