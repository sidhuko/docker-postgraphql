FROM node:6-slim

WORKDIR /var/nanowire

ADD package.json /var/nanowire
ADD server.js /var/nanowire

RUN npm install

EXPOSE 5000

ENTRYPOINT ["npm"]
CMD ["start"]
