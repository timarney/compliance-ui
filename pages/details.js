import Head from "next/head";
import { hydrate, css } from "react-emotion";
import { controlStatus } from "../api/index";
import { withRouter } from "next/router";

const home = css`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const PageHead = () => (
  <div>
    <Head>
      <title>CDS - Details</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  </div>
);

const outputVerifications = data => {
  return data.verifications.map(() => {
    return "hey";
  });
};

const Details = withRouter(({ router, data }) => {
  const control = router.query.control;
  console.log("control", control);
  let status = null;
  if (data && data.ITSG33a && data.ITSG33a[control]) {
    status = outputVerifications(data.ITSG33a[control]);
  }
  return (
    <div>
      <h1>{control}</h1>
      <div>Details </div>
      {status}
    </div>
  );
});

class DetailsPage extends React.Component {
  state = { err: false, data: {} };
  async componentDidMount() {
    const result = await controlStatus("SA_11_1");
    console.log("result", result);

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

    return <Details data={data} />;
  }
}

const result = controlStatus("SA_11_1");

export default DetailsPage;
