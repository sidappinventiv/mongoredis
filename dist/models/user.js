"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_s = void 0;
const mongoose_1 = require("mongoose");
// const {Schema} = mongoose;
const mongoose_2 = __importDefault(require("mongoose"));
;
const user = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    // fullname:{
    //     type:String,
    //     // required:true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // dob:{
    //     type:Date,
    //     // required:true,
    //     minlength:8
    // },
    password: {
        type: String,
        required: true
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
const user_s = mongoose_2.default.model('user', user);
exports.user_s = user_s;
