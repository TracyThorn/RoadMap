const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!")
});

app.use("/", express.static(path.resolve(__dirname, "../client/dist")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
})

const noteRouter = require("./notes/routes/note");

app.use("/note", noteRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});