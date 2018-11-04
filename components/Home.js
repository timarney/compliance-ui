import { Grid, IsReady, Failed } from "./";
export const Home = ({ err, data }) => {
  if (err) {
    return <Failed />;
  }
  return (
    <div>
      <IsReady data={data} />
      <Grid data={data} link={true} />
    </div>
  );
};
