"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const session = require('session');
const secretkey = 'sdfukzsy';
function createToken(req) {
    const key = secretkey;
    const token = jsonwebtoken_1.default.sign({ userId: req.body.email }, key, { expiresIn: "5d" });
    return token;
}
exports.createToken = createToken;
// export function createToken(req:Request){
//     const key = secretkey;
//     const token = jwt.sign(
//        req.body.authorization= sign({ userId: req.body.email },key,{ expiresIn: "5d" });
//        let redisdata = await RedisClient.get(`${user_s?._id}`)
//        if(!redisdata){
//         console.log('miss')
//         // Creating new sesson
//         let data = await sessionModel.find({ userId: user?._id, isActive: true })
//         if(!(data.length > 0)){
//             await sessionModel.create({ userId: user?._id, isActive: true  })
//         }
//         RedisClient.setEx(`${user_s?._id}` , 3600 , "true")
//     }else{
//     console.log('cache hit')
// }
//     return token
// }
// req.body.authorization = sign({ _id: user?._id, email, username: user?.username }, 'secretKey', { expiresIn: '1h' });
// let redisdata = await redisClient.get(`${user?._id}`)
// if(!redisdata){
//     console.log('miss')
//     // Creating new sesson
//     let data = await sessionModel.find({ userId: user?._id, isActive: true })
//     if(!(data.length > 0)){
//         await sessionModel.create({ userId: user?._id, isActive: true  })
//     }
//     redisClient.setEx(`${user?._id}` , 3600 , "true")
// }else{
// console.log('cache hit')
