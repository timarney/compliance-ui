import { request } from "graphql-request";
import { controls } from "./controls";

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

const getData = () => {
  const endpoint = "http://localhost:3000";
  return request(endpoint, buildQuery()).then(data => data);
};

export default getData;
