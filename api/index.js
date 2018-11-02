import { request } from "graphql-request";
import { controls } from "./controls";
import { graphData } from "./sample";

/* build up the query string  */
/*
query{
 ITSG33a{
  AC_2{
    name
    verifications{
      passed
    }
  }
}
}
*/
const buildQuery = () => {
  let query = "{ITSG33a{";

  const controlsObj = Object.keys(controls).map(item => {
    query += ` ${item}{name verifications{passed}}`;
  });

  query += "}}";
  return query;
};

const getData = async () => {
  const endpoint = process.env.API_URL;
  const data = await request(endpoint, buildQuery())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err.message);
      return err;
    });

  return data;
};

export default getData;
