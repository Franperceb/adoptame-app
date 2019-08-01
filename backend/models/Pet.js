const  {Schema ,  model} = require ('mongoose')

const petSchema = new Schema(
{
    name:{
      type: String,
      required: true
    },
    race: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    extraInfo: {
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },image: {
			type: String,
			default: "https://ischool.illinois.edu/sites/default/files/styles/normal_square/public/images/empty-avatar-01_1.jpg"
		}
},
{
 timestamps: true,
 versionKey: false
}
)

module.exports = model('Pet', petSchema)
