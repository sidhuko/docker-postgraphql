FROM node:6-slim

WORKDIR /var/nanowire

ENV PGQL_CORS="enabled" \
    PGQL_RELAY="enabled" \
    PGQL_GRAPHIQL="/graphiql" \
    PGQL_SCHEMA="public,private" \
    PGQL_DEFAULT_ROLE="anonymous" \
    PGQL_JWT_SECRET="s0m3rh1ngR4nd0m" \
    PGQL_JWT_TOKEN="public.jwt_token"

ADD package.json /var/nanowire
ADD server.js /var/nanowire

RUN npm install

EXPOSE 5000

ENTRYPOINT ["npm"]
CMD ["start"]
