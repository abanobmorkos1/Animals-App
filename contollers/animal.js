// import dependencies 
const express = require('express');
const animals = require('../models/animals')

const router = express.Router();
// import controllers
router.get('/' , async (req , res) => {     // get all animals
    const allAnimals = await animals.find({})
    res.render('index.ejs' , {animals : allAnimals})
})

router.get('/new' , (req , res) => { // form new animal
    res.render('new.ejs')
})

router.post('/' , async (req , res) => {  // post a new animal
    console.log(req.body)
    
    if(req.body.extinct === 'on'){
        req.body.extinct = true;
    }else {
        req.body.extinct = false;
    }
    await animals.create(req.body);
    res.redirect('/animal')
})

router.get('/:id' , async (req , res) => { // select a  animal
    const id = req.params.id
    const animal = await animals.findById(id)
    res.render("show.ejs", {animal} )
})

router.delete('/:id', async (req, res) => { // delete animal by id
    const id = req.params.id
    await animals.findByIdAndDelete(id)
    res.redirect('/animal')
})

router.get('/:id/edit', async (req, res) => { // form edit animal
    const id = req.params.id
    const animal = await animals.findById(id)
    res.render('edit.ejs' , {animal})
})

router.put('/:id', async (req, res) => { // update an animal
    const id = req.params.id
    req.body.extinct = req.body.extinct === 'on'? true : false
    await animals.findByIdAndUpdate(id, req.body)
    res.redirect('/animal')
})
module.exports= router; 