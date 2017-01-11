var express = require('express');
var postgraphql = require('postgraphql').postgraphql;

const SCHEMA = process.env.PGQLSCHEMA;
const CONNECTION = process.env.PGQL_CONNECTION;

const OPTIONS = {
  graphiql: process.env.PGQL_GRAPHIQL || true, // @todo set to true
  watchPg: true
};

const app = express();

app.use(postgraphql(CONNECTION, SCHEMA, OPTIONS));

app.listen(5000, () => {
  console.log('Server is listening');
});
