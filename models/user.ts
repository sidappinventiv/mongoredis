import {Document,Schema,connect} from 'mongoose';
// const {Schema} = mongoose;
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { defaults } from 'joi';
// import { isNamedExportBindings } from 'typescript';
// const salt_fact = 8;

interface user_schema extends Document{
    username:String;
    email:String;
    password:String;

};

const user = new Schema<user_schema>({
    username:{
        type:String,
        required:true
    },
    // fullname:{
    //     type:String,
    //     // required:true
    // },
    email:{
        type:String,
        required:true,
        unique:true
    },
    // dob:{
    //     type:Date,
    //     // required:true,
    //     minlength:8
    // },
    password:{
        type:String,
        required:true
    },
    // profile_pic:{
    //     type:String,
    //     // required:true

    // },
    // bio:{
    //     type:String
    // },
    // gender:{
    //     type:String,
    //     enum: ['F','M','ts']
    // }

});
// user.pre<user_schema>('save', async function (next) {
//     // try {
//       if (!this.isModified('password')) {
//         bcrypt.hash(this.password.toString(),8,(err,hash) => {
//             if(err) return next(err);

//             this.password = hash;
//             next();
//         })
//         // return next();
//       }
//     });
    //   const saltRounds = 10;
    //   const salt = await bcrypt.genSalt(saltRounds);
    //   this.password = await bcrypt.hash(this.password, salt);
    //   next();
    // } catch (error) {
    //   next();
    // }
//   });

// user.pre<user_schema>('save', async function (next) {
//     try {
//       if (!this.isModified('password')) {
//         return next();
//       }
  
//       const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       this.password = await bcrypt.hash(this.password.toString(), salt);  // Convert String to primitive string
//       next();
//     } catch (error) {
//       next();
//     }
//   });
// user.pre<user_schema>('save',async function(next){ 
//     try{
// if(!this.isModified('password')) {return next();}

// const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (error) {
//       next();
//     }
    
//   });

const user_s = mongoose.model<user_schema>('user' , user);
export {user_s}



