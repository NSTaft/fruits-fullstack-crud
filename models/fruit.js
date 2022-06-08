/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

const mongoose = require('./connections')

///////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
// is equal to:
const { Schema, model } = mongoose

// Make fruits Schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
})

// Make Fruit model // the " " argument becomes a collection
const Fruit = model("Fruit", fruitsSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Fruit;