import mongoose from "mongoose";
const {Schema} = mongoose;
interface post_schema extends Document{
  user_id:mongoose.Schema.Types.ObjectId;
  content:String;

};
const post = new Schema<post_schema>({
    
    user_id:{ 
    type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    // created_at:{
    //     type:Date,
    //     required:true
    // },
    // updated_at:{
    //     type:Date,
    //     required:true
    // },
    content:{
    type:String,
    required:true
  }
  // post_img_url:{
  //   type:String,
  //   required:true
  // }
    
});

const postsh = mongoose.model<post_schema>('posts' , post);
export {postsh}