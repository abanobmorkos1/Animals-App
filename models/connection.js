require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

mongoose.connection 
    .on('open' , () => console.log('connected to mongo'))
    .on('close' , () => console.log('not connected to mongo'))
    .on('error' , () => console.log('error connecting to mongo'));


module.exports = mongoose