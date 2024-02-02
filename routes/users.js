const mongoose = require("mongoose")

// Setup
mongoose.connect("mongodb://127.0.0.1:27017/pacticeDB") //created DB in MongoDB

//Define Document format
const userSchima = mongoose.Schema({ 
  username: String,
  name: String,
  age: Number
})

// creating schima 
// mongoose.model("Schima name", Document format)
module.exports = mongoose.model("user", userSchima) //Created Collection in DB
