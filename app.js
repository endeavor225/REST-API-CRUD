import express from "express";
const app = express();
import routes from "./routes/routes.js";
import Db from "./db/db.js";

const port = 8085;

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

Db.sync()
  .then(console.log("Connexion à la bdd"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
