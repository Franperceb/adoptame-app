const  {Schema ,  model} = require ('mongoose')

const postSchema = Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String,
      required: true
    },  
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User"
      
    }
  },
  {  
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    versionKey: false
  }
);


module.exports = model('Post', postSchema)
