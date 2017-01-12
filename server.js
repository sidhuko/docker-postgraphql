var express = require('express');
var postgraphql = require('postgraphql').postgraphql;

const SCHEMA = process.env.PGQL_SCHEMA;
const CONNECTION = process.env.PGQL_CONNECTION;
const JWT_TOKEN = process.env.PGQL_JWT_TOKEN || false;
const DEFAULT_ROLE = process.env.PGQL_DEFAULT_ROLE || false;
const GRAPHIQL = process.env.PGQL_GRAPHIQL || false;
const JWT_SECRET = process.env.PGQL_JWT_SECRET || false;
const WATCH = process.env.PGQL_WATCH || false;

const app = express();

const options = {
  watchPg: process.env.PGQL_WATCH || false,
};

if (!SCHEMA) {
  throw Error("Must be supplied a schema");
}

if (!CONNECTION) {
  throw Error("Must be supplied a pg connection");
}

if (WATCH) {
  options.watchPg = true;
}

if (JWT_SECRET) {
  options.jwtSecret = true;
}

if (GRAPHIQL) {
  options.graphiql = true;
  options.graphiqlRoute = GRAPHIQL;
}

if (JWT_TOKEN) {
  options.jwtPgTypeIdentifier = JWT_TOKEN;
}

if (DEFAULT_ROLE) {
  options.pgDefaultRole = DEFAULT_ROLE;
}

app.use(postgraphql(CONNECTION, SCHEMA.split(','), options));

app.listen(5000, () => {
  console.log('Server is listening');
});
