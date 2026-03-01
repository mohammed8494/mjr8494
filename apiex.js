const express = require("express");
const app = express();
const port = 5000;
const users = require("./Data.js");

const logger = (req, res, next) => {
  console.log(req.method);
  next();
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(logger);

app.get("/",(req, res) => {
  res.send("<a href='/api'> go to api </a>");
});

app.get("/api", (req, res) => {

  const nusers = users.filter((e) => e.age > 22)
  res.json(nusers);
  // res.send("<a href='/'> go to home </a>");
});

app.get("/api/:id", (req, res) => {
  const {id} = req.params;
  const user = users.find((e) => e.id == Number(id));
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
