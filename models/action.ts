import mongoose from 'mongoose';
const {Schema} = mongoose;

const replyschema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
  });
const comments = new mongoose.Schema({
    post_id:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    reply:[replyschema],
    // {
    //     type:Text,
    //     required:true
    // },
    updated_at:{
        type:Date,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    }
    
})


export const likes = new mongoose.Schema({
    count:{
        type:Number,
        required:true
    },
    post_id:{ ref :"posts",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:['sent','accepted','pending'],
        required:true
    },
 
    
});
const actionsch = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        Required : true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        Required : true
    },
    comments:[comments],
    likes : [likes]
});
  const action = mongoose.model('action' , actionsch);
  const comment = mongoose.model('Comment', comments);
  const like = mongoose.model('Like', likes)
  const reply = mongoose.model('Reply',replyschema);
//  export default mongoose.model('Comments' , comments)
 export{action}
  
  
