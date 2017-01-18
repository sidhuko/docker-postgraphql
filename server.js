var express = require('express');
var postgraphql = require('postgraphql').postgraphql;

const SCHEMA = process.env.PGQL_SCHEMA;
const CONNECTION = process.env.PGQL_CONNECTION;

const JWT_SECRET = process.env.PGQL_JWT_SECRET || false;
const JWT_TOKEN = process.env.PGQL_JWT_TOKEN || false;
const DEFAULT_ROLE = process.env.PGQL_DEFAULT_ROLE || false;

const GRAPHIQL = process.env.PGQL_GRAPHIQL || false;
const CORS = process.env.PGQL_CORS || 'disabled';
const RELAY = process.env.PGQL_RELAY || false;
const WATCH = process.env.PGQL_WATCH || 'disabled'

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

if (CORS === 'enabled') {
  options.enableCors = true;
}

if (WATCH === 'enabled') {
  options.watchPg = true;
}

if (JWT_SECRET) options.jwtSecret = true;
if (JWT_TOKEN) options.jwtPgTypeIdentifier = JWT_TOKEN;
if (DEFAULT_ROLE) options.pgDefaultRole = DEFAULT_ROLE;

if (GRAPHIQL) {
  options.graphiql = true;
  options.graphiqlRoute = GRAPHIQL;
}

if (RELAY) {
  options.classicIds = true;
}


app.use(postgraphql(CONNECTION, SCHEMA.split(','), options));

app.listen(5000, () => {
  console.log('Server is listening');
});
