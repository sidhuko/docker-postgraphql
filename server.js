var express = require('express');
var postgraphql = require('postgraphql').postgraphql;

const CONNECTION = process.env.PGQL_CONNECTION;

const OPTIONS = {
  schema: process.env.PGQL_SCHEMA,
  graphiql: process.env.PGQL_GRAPHIQL || true, // @todo set to true
};

const app = express();

app.use(postgraphql(CONNECTION, OPTIONS));

app.listen(5000);
