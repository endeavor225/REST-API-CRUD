import express from "express";
const app = express();
import routes from "./routes/routes.js";
const port = 8085;

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
