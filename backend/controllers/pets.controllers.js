const Pet = require('../models/Pet')
const User = require('../models/User')




exports.getAllPets = (req,res,next) =>{
 
  User.findById(req.user._id).populate('puppy')
  .then(pets => res.status(200).json({pets}) )
  .catch(err => res.status(500).json({err}))
}


exports.getOnePet  = (req,res,next) => {
  const {id} = req.params
  Pet.findById(id)
  .then(pet => res.status(200).json({pet}))
  .catch(err => res.status(500).json(err))
}


exports.createPet = async (req,res,next) => {
  try{ 
     const pet = await Pet.create({...req.body})
    await User.findByIdAndUpdate(req.user._id, {$push: {puppy: pet._id}}, {new: true})
      res.status(201).json({pet})
    
}catch(err){ 
  res.status(500).json(err)
  console.log(err)
}
}

exports.updatePet =(req,res,next) =>{
  const {id} = req.params
  Pet.findByIdAndUpdate(id,{...req.body},{new:true})
  .then(pet=> res.status(200).json(pet))
  .catch(err => res.status(500).json(err))
}

exports.deletePet = (req,res,next) =>{
  const {id} = req.params
  Pet.findByIdAndDelete(id)
  .then(pet => res.status(200).json({pet,msg: 'Created'}))
  .catch(err => res.status(500).json(err))

  exports.postUpload = async (req, res, next) => {
    try {
  
      req.pet = await Pet.findByIdAndUpdate(req.pet._id, { image: req.file.url }, { new: true });
      
      res.status(200).json({ pet: req.pet, msg: "Image uploaded" });
    } catch (error) {
      console.log(error)
    }
    
  }; 
}
