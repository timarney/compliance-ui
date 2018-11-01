import Head from "next/head";
import "isomorphic-fetch";
import { hydrate, css } from "react-emotion";
import getData from "../api/index";
import Header from "../components/header";
import Grid from "../components/grid";
import IsReady from "../components/isReady";

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
      <title>CDS</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  </div>
);

class DataProvider extends React.Component {
  state = { data: {} };
  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }
  render() {
    const data = this.state.data;
    return (
      <div>
        <IsReady data={data} />
        <Grid data={data} />
      </div>
    );
  }
}

const data = {};

const IndexPage = ({}) => {
  return (
    <div>
      <PageHead />
      <Header />
      <div className={home}>
        <DataProvider />
      </div>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  return {};
};

export default IndexPage;
