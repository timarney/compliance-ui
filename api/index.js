import { request } from "graphql-request";
import { controls } from "./controls";

const endpoint = process.env.API_URL;

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

export const allControlsStatus = async () => {
  //return multiControlData;

  let query = "{ITSG33a{";

  Object.keys(controls).map(item => {
    query += ` ${item}{name verifications{passed}}`;
  });

  query += "}}";

  const data = await request(endpoint, query)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err.message);
      return err;
    });

  return data;
};

export const controlStatus = async control => {
  const query = `query{
    ITSG33a{
      ${control}{
       name
       verifications{
         passed
       }
      }
    }
   }`;

  const data = await request(endpoint, query)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err.message);
      return err;
    });

  return data;
};
