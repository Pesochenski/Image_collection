const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const imageSchema = require("./schema");
require("dotenv").config();

const app = express();
const {
  SERVER_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_BASENAME,
  DB_CLUSTER,
} = process.env;

app.use(cors());
app.listen(SERVER_PORT, () => console.log("Server works"));

const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.bhhnz.mongodb.net/${DB_BASENAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e));

const Images = mongoose.model("Images", imageSchema);

// Images.create({
//   id: 10,
//   link: "https://i.imgur.com/20u4zbR.jpg",
//   title: "Tenth image",
//   date: "10-02-2021",
// });

app.get("/images", (req, res) => {
  Images.find({}, (err, images) => {
    if (err) return console.log(err);
    res.send(images);
  });
});
