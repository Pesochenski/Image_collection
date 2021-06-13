const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = imageSchema;
