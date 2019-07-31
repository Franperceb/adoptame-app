const router = require('express').Router()
const { verifyToken } = require('../config/jwt')

const {createPet,getAllPets,getOnePet,updatePet,deletePet} = require('../controllers/pets.controllers')

//create Pet
router.post('/pets', verifyToken, createPet)

//Read Pets(all)
router.get('/pets',getAllPets)

//Read Pet(detail)
router.get('/pets/:id',getOnePet)

//update Pet
router.patch('/pets/:id',updatePet)

//delete Pet
router.delete('/pets/:id',deletePet)

module.exports = router
 