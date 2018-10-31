FROM node:alpine
WORKDIR /usr/src/site/
COPY package*.json ./
RUN npm install
RUN npm build

COPY ./build ./build
COPY ./server.js ./server.js

EXPOSE 8080

CMD ["npm", "server"]