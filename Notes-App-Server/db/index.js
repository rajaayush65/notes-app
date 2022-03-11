const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected To Database"))
  .catch((e) => {
    console.log("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
