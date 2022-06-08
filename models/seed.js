///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const { mongo } = require("mongoose");
const mongoose = require("./connections")
const Fruit = require('./fruit')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// Save the connection in a variable
const db = mongoose.connection

// Make sure code is not run until connected
db.on('open', () => {
    // array of starter fruits
    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ];

    // Delete all fruits
    Fruit.deleteMany({})
        .then((deletedFruits) => {
            // Add Starter Fruits
            Fruit.create(startFruits)
                .then((newFruits) => {
                    console.log(newFruits)
                    db.close()
                })
                .catch((error) => {
                    console.log(error)
                    db.close()
                })
        })
        .catch((error) => {
            console.log(error)
            db.close()
        })
})



