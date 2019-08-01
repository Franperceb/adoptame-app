const router = require('express').Router()
const { verifyToken } = require('../config/jwt')
const {createPost,getAllPosts,getOnePost,updatePost,deletePost,getAllPostsUsers} = require('../controllers/post.controllers')



//create Post
router.post('/posts',verifyToken,createPost)

//Read Posts(of user)
router.get('/posts',verifyToken, getAllPosts)

//Read Posts(detail)
router.get('/posts/:id',getOnePost)

//update Posts
router.patch('/posts/:id',updatePost)

//delete Posts
router.delete('/posts/:id',deletePost)
// all Posts of users
router.get('/all-posts', getAllPostsUsers)

module.exports = router