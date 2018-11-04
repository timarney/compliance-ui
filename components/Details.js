import { withRouter } from "next/router";
import { controlStatus } from "../api";
import { Grid, IsReady, Failed } from "./";

class Details extends React.Component {
  state = { err: false, data: {} };

  async componentDidMount() {
    const control = this.props.router.query.control;
    const result = await controlStatus(control);

    if (result instanceof Error) {
      this.setState({ err: result.message });
      return;
    }

    this.setState({ data: result });
  }

  render() {
    const control = this.props.router.query.control;
    const { data } = this.state;

    return (
      <div>
        <h1>{control}</h1>
        <Grid data={data} />
      </div>
    );
  }
}

export default withRouter(Details);
