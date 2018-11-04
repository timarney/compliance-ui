import { withRouter } from "next/router";
import { Grid, Failed } from "./";
import { useState, useEffect } from "react";
import { controlStatus } from "../api";

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
      <Grid data={data ? data : controlData} />
    </div>
  );
};

export default withRouter(Details);
