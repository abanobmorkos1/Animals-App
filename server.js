////////////////////////
// Setup - Import deps and create app object
require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const ejs = require('ejs')
const animals = require('./models/animals')
const methodOverride = require("method-override");
const animalRouter = require('./contollers/animal')

////////////////////////
// middleware
app.use(morgan(':method :url :status :response-time ms'))
app.use(express.urlencoded())
app.use(methodOverride('_method'))
app.use("/animal" , animalRouter)



///////////////////////////
// Server Listener

const PORT = process.env.PORT    // definig the port
app.listen(PORT , () => {
    console.log(`listening on port : ${PORT}`)
})