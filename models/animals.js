const mongoose = require('./connection')


const animalSchema = new mongoose.Schema({
    species :  String, 
    location: String,
    lifeExpectancy : Number,
    extinct : Boolean
}); 

const animals = mongoose.model('animals' , animalSchema);

module.exports = animals