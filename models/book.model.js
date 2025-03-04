const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: String,
    author: String,
    genre: String,

});

const MyBooks = mongoose.model("MyBooks", bookSchema);

module.exports = { MyBooks };
