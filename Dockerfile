FROM node:6-slim

ENV PGQL_SCHEMA="example_schema" \
    PGQL_CONNECTION="postgres://localhost:5432" \
    PGQL_SECRET="aSecretTokenHere" \
    POSTGRES_HOST="localhost" \
    POSTGRES_PORT="5432"

WORKDIR /var/nanowire

ADD package.json /var/nanowire

RUN npm install

EXPOSE 5000

ENTRYPOINT ["npm"]
