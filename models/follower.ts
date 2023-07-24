import mongoose from "mongoose";
const {Schema} = mongoose;

const followers = new mongoose.Schema({
    follower_id:{
        type:Number,
        required:true
    },
    following_id:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['sent','accepted','pending'],
        required:true
    },
 
    
})

const followersh =  mongoose.model('followers' , followers);
export {followersh};