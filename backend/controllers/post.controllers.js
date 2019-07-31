const Post = require('../models/Post')
const User = require('../models/User')

exports.getAllPosts = (req,res,next) =>{
  const id= req.user._id
  User.findById(id).populate('post')
  .then(post => res.status(200).json({post}))
  .catch(err => res.status(500).json({err}))
}


exports.getOnePost  = (req,res,next) => {
  const {id} = req.params
  Post.findById(id)
  .then(post => res.status(200).json({post}))
  .catch(err => res.status(500).json(err))
}

exports.createPost = async (req,res,next) => {
  const {id} = req.user
  console.log(id)
  try{ 
    const post = await Post.create({...req.body, authorId:id})
      
      await User.findByIdAndUpdate(req.user._id, {$push: {post: post._id}}, {new: true})
      res.status(201).json({post})
}catch(err){ 
  res.status(500).json(err)
  console.log(err)
} 
}


exports.updatePost =(req,res,next) =>{
  const {id} = req.params
  Post.findByIdAndUpdate(id,{...req.body},{new:true})
  .then(post=> res.status(200).json(post))
  .catch(err => res.status(500).json(err))
}

exports.deletePost = (req,res,next) =>{
  const {id} = req.params
  Post.findByIdAndDelete(id)
  .then(post => res.status(200).json({post,msg: 'Created'}))
  .catch(err => res.status(500).json(err))
}
