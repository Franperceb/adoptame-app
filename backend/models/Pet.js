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
      enum: ['Male','Female'],
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
    }
},
{
 timestamps: true,
 versionKey: false
}
)

module.exports = model('Pet', petSchema)
