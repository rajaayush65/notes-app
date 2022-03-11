const express = require("express");
const cors = require("cors");
const bodyParser = require("body-Parser");

const db = require("./db");
const noteRouter = require("./routes/note-router");

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB Connection Error: "));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", noteRouter);

app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});
