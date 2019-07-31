const Post = require('../models/Post')
const User = require('../models/User')

exports.getAllPosts = (req,res,next) =>{
  Post.find()
  .then(posts => res.status(200).json({posts}))
  .catch(err => res.status(500).json({err}))
}


exports.getOnePost  = (req,res,next) => {
  const {id} = req.params
  Post.findById(id)
  .then(post => res.status(200).json({post}))
  .catch(err => res.status(500).json(err))
}

exports.createPost = async (req,res,next) => {

  try{ 
     const post = await Post.create({...req.body})
   
      await User.findByIdAndUpdate(req.user._id, {$push: {post: post._id}}, {new: true})
      res.status(201).json({post})
}catch(err){ 
  res.status(500).json(err)
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
