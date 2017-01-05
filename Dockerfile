FROM node:6-slim

ENV PGQL_SCHEMA="example_schema" \
    PGQL_CONNECTION="postgres://localhost:5432" \
    PGQL_SECRET="aSecretTokenHere"

ADD start.sh /postgraphql

WORKDIR /postgraphql

RUN npm install -g postgraphql

EXPOSE 5000

CMD ["./postgraphql/start.sh"]
