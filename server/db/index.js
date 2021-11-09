const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:root@react.ggm9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
// mongodb://127.0.0.1:27017/cinema
