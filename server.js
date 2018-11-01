const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const store = require("store");

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("*", (req, res) => {
    let input = Object.assign({}, req.body);
    let theme = store.get("theme");

    if (!theme) {
      theme = "darker";
    }

    theme = theme === "darker" ? "lighter" : "darker";
    store.set("theme", theme);

    return app.render(req, res, "/", req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} !!!`);
  });
});
