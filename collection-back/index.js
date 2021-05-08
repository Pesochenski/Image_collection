const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const imageSchema = require("./schema");
const app = express();

const PORT = 5000;

app.use(cors());
app.listen(PORT, () => console.log("Server works"));

const USERNAME = "Pesochenski";
const PASSWORD = "AdminPesochenski";
const DATABASE = "imageCollection";

const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bhhnz.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

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
