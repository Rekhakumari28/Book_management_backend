const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
},
author: {
    type: String,
    required: true
},
publishedYear :{
    type: Number, 
    required: true
},
genre: [{
    type: String,
    enum: ["Fiction", "Autobiography", "Non-fiction", "Business", "Mystery", "Thriller", "Science Fiction","Fantasy","Romance", "Historical","Biography","Self-help","other"]
}],
language: {
    type: String,
    required: true
},
country: {
    type: String,
    default: "United States"
},
rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
},
summary: {
    type: String,        
},
coverImageUrl: {
    type: String,
},
});

const Books = mongoose.model("Books", bookSchema);

module.exports = { Books };
