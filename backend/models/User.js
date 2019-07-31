const  {Schema ,  model} = require ('mongoose')
const PLM =  require('passport-local-mongoose')


const userSchema =  new Schema(
{
    firstName:{
      type:String,
      required: true
    },
    lastName:{
    type: String,
    required: true
    } ,
    email:{
      type: String,
      required: true
    },
    role:{
       type: String,
       enum: [ 'USER','EMPLOYEE'],
       required: true
    },
    phoneNumber:{
      type: Number,
      required: true
    },
    puppy:[{
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }],
    post:[{
      type: Schema.Types.ObjectId,
      ref:'Post'
    }]  ,
    image: {
			type: String,
			default: "https://ischool.illinois.edu/sites/default/files/styles/normal_square/public/images/empty-avatar-01_1.jpg"
		}
},
{
  timestamps: true,
  versionKey: false
})

userSchema.plugin(PLM, {usernameField:'email'})
module.exports = model('User',userSchema)

