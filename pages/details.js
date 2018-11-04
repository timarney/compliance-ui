import Head from "next/head";
import { hydrate, css } from "react-emotion";
import { Header, Details } from "../components";
import { controlStatus } from "../api";

const details = css`
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

const DetailsPage = ({ err, data }) => {
  return (
    <div>
      <PageHead />
      <Header />
      <div className={details}>
        <Details data={data} err={err} />
      </div>
    </div>
  );
};

DetailsPage.getInitialProps = async ({ req }) => {
  if (!req || !req.params || !req.params.control) {
    return;
  }

  const control = req.params.control;
  const result = await controlStatus(control);
  const props = { data: result, err: false };

  if (result instanceof Error) {
    props.err = result.message;
  }

  return props;
};

export default DetailsPage;
