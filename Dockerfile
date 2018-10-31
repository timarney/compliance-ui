FROM node:alpine
COPY . .
RUN npm install
RUN npm run-script build
EXPOSE 8080
CMD ["node", "server.js"]