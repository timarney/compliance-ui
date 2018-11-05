import { withRouter } from "next/router";
import { Grid, Failed, BackIcon } from "./";
import { useState, useEffect } from "react";
import { controlStatus } from "../api";
import { css } from "emotion";

const back = css`
  display:inline-block;
  margin-bottom: 1em;
  color:#000;
`;

export const Details = ({ data, err, router }) => {
  const control = router.query.control;
  const [controlData, setControlData] = useState({});

  useEffect(async () => {
    if (data) return;
    const result = (data = await controlStatus(control));
    setControlData(result);
  }, controlData);

  if (err) {
    return <Failed />;
  }

  return (
    <div>
      <h1>{control}</h1>
      <a href="/" className={back}>
        <BackIcon />
        Back
      </a>
      <Grid data={data ? data : controlData} />
    </div>
  );
};

export default withRouter(Details);
