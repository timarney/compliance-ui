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
  const endpoint = "http://localhost:3000";
  console.log(endpoint)
  const data = await request(endpoint, buildQuery())
    .then(data => data)
    .catch(() => {
      return graphData;
    });

  return data;
};

export default getData;
