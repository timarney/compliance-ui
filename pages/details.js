import Head from "next/head";
import { hydrate, css } from "react-emotion";

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

const DetailsPage = ({}) => {
  return <div>Details</div>;
};

Details.getInitialProps = async ({ req }) => {
  return {};
};

export default Details;
