const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

app.prepare().then(() => {
  app.setAssetPrefix(process.env.PUBLIC_PATH);
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/controls/:control", (req, res) => {
    const actualPage = "/details";
    const queryParams = { control: req.params.control };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
