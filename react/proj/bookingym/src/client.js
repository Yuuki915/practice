import * as contentful from "contentful";

export const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
