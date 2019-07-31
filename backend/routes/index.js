const router = require('express').Router()
const { signup, login, logout, profile , postUpload,postEdit} = require('../controllers/auth.controllers')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')
const uploadCloud = require('../config/cloudinary')



router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.post('/upload', verifyToken, uploadCloud.single('photo'), postUpload)
router.post('/edit', verifyToken, postEdit)
router.get('/logout', logout)



router.get('/profile', verifyToken, profile)

module.exports = router