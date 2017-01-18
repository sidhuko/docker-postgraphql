# Docker PostgraphQL  
This project aims to support releases of PostgraphQL as a service within docker.

It is currently in alpha, not secure or stable for production, to allow for discussion on techniques and performance based on previously discussed [issues](https://github.com/calebmer/postgraphql/issues/84#issuecomment-243053660).


# Environment variables

WAIT_ON
Required TCP host postgres-host:5432

PGQL_CONNECTION
Required postgres://postgraphql:postgraphql@postgres-host/database

The rest of our environment variables passed to PostgraphQL [library middleware](https://github.com/calebmer/postgraphql/blob/master/docs/library.md).

```
PGQL_CORS="enabled"
PGQL_RELAY="enabled"
PGQL_GRAPHIQL="/graphiql"
PGQL_SCHEMA="public,private"
PGQL_DEFAULT_ROLE="anonymous"
PGQL_JWT_SECRET="s0m3rh1ngR4nd0m"
PGQL_JWT_TOKEN="public.jwt_token"
```


# Contributing
