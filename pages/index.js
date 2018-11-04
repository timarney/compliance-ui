import Head from "next/head";
import { hydrate, css } from "react-emotion";
import { Header, Home } from "../components";
import { allControlsStatus } from "../api/index";

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

const IndexPage = ({ err, data }) => {
  return (
    <div>
      <PageHead />
      <Header />
      <div className={home}>
        <Home err={err} data={data} />
      </div>
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const result = await allControlsStatus();
  const props = { data: result, err: false };

  if (result instanceof Error) {
    props.err = result.message;
  }

  return props;
};

export default IndexPage;
