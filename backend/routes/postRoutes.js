const router = require('express').Router()
const { verifyToken } = require('../config/jwt')
const {createPost,getAllPosts,getOnePost,updatePost,deletePost} = require('../controllers/post.controllers')



//create Post
router.post('/posts',verifyToken,createPost)

//Read Posts(all)
router.get('/posts',getAllPosts)

//Read Posts(detail)
router.get('/posts/:id',getOnePost)

//update Posts
router.patch('/posts/:id',updatePost)

//delete Posts
router.delete('/posts/:id',deletePost)

module.exports = router