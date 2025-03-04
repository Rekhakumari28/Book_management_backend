const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: String,
  author: String,
  genre: String,
  language:String,
  rating: Number,
  publishedYear:Number
});

const MyBooks = mongoose.model("MyBooks", bookSchema);

module.exports = { MyBooks };
