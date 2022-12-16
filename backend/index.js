const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.listen(process.env.PORT, console.log("Server started on port 5000"));

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  res.send(notes.find((n) => n._id === req.params.id));
});

app.get("/", (req, res) => {
  res.send("API is running...");
});
