import mongoose from "mongoose";
const {Schema} = mongoose;


interface session extends Document{
  user_id:mongoose.Schema.Types.ObjectId;
  status?:String;
}
const session = new mongoose.Schema({
   user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
},
status:
{
  type:String
}
    // location:{ 
    //     type:String,
    //     required:true
    // },
    // device_type:{
    //     type:String,
    //     required:true
    // },
    // token:{
        
    //     type:String,
    //     required:true
    // },

  // created_at:{
  //   type:Date,
  //   required:true
  // },
  // updated_at:{
  //   type:Date,
  //   required:true
  // }
    
});

const sessionsc = mongoose.model('session' , session)
export {sessionsc};