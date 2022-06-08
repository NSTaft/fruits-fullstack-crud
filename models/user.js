//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connections")


////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// Pull Schema and model from mongoose
const { Schema, model } = mongoose 

// Make user Schema
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Make user model
const User = model("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User;

