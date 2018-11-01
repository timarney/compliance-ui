import Head from "next/head";
import "isomorphic-fetch";
import { hydrate, css } from "react-emotion";
import getData from "../api/index";
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
      <title>My page title!!</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  </div>
);

class DataProvider extends React.Component {
  state = {};
  async componentDidMount() {
    const data = await getData();
    console.log(data);
  }
  render() {
    return this.props.children;
  }
}

const data = {};

const IndexPage = ({}) => {
  return (
    <div>
      <PageHead />
      <div className={home}>
        <DataProvider>
          <div>API URL {process.env.API_URL}</div>
          <IsReady data={data} />
          <Grid data={data} />
        </DataProvider>
      </div>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  return {};
};

export default IndexPage;
