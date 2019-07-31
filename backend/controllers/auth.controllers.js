const User = require('../models/User')
const { signToken, verifyToken } = require('../config/jwt')
const Post  = require('../models/Post')

exports.signup = (req, res, next) => {
  User.register({ ...req.body, role: 'USER' }, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }))
}

exports.login = (req, res, next) => {
  const [header, payload, signature] = signToken(req.user)
  res.cookie('headload', `${header}.${payload}.`, {
    // quitar comentarios cuando este en producción para máxima seguridad
    // maxAge: 1000 * 60 * 60 * 6,
    // secure: true
  })
  res.cookie('signature', signature, {
    // quitar comentarios cuando este en producción para máxima seguridad
    // httpOnly: true,
    // secure: true
  })
  res.status(200).json({ user: req.user })
}

exports.logout = (req, res, next) => {
  res.clearCookie('headload')
  res.clearCookie('signature')
  res.status(200).json({ msg: 'Bye bye' })
}

exports.profile = (req, res, next) => {
  User.findById(req.user._id, { hash: 0, salt: 0 })
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(401).json({ err }))
}
exports.postUpload = async (req, res, next) => {
	try {

		req.user = await User.findByIdAndUpdate(req.user._id, { image: req.file.url }, { new: true });
    
		res.status(200).json({ user: req.user, msg: "Image uploaded" });
	} catch (error) {
		console.log(error)
  }
  
};

exports.postEdit = async (req, res, next) => {
	try {
		let { firstName, lastName, role, phoneNumber, email } = req.body;
		if (!firstName) firstName = req.user.firstName;
		if (!lastName) campus = req.user.lastName;
		if (!phoneNumber) phoneNumber = req.user.phoneNumber;
		if (!email) email = req.user.email;
		if (!role) role = req.user.role;
		req.user = await User.findOneAndUpdate({ firstName: req.user.firstName }, { firstName, lastName, role, phoneNumber, email }, { new: true });
		res.status(200).json({ user: req.user, msg: "User updated!" });
	} catch (error) {
		console.error(error);
		res.status(401).json({ error });
  } 
};


exports.getAllUsers = (req,res,next) =>{
  console.log(req.user.post._id)
  console.log(req.user.id)
  Post.findById(req.user.post)
  .then(post => res.status(200).json({post}))
  .catch(err => res.status(500).json({err}))
}