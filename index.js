const express = require("express");
const users = require("./Data.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("front"));

app.get("/", (req, res) => {
  res.status(200).json({ succece: true, data: users });
});

app.post("/api", (req, res) => {
    const {username , text} = req.body;
    if (username && text) {
        res.status(200).send(`<h1>username is ${username} and text is ${text}</h1>`);
    }else{
        res.status(400).send("please enter username and text")
    }

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


