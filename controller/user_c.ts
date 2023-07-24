// import { Request, Response, NextFunction, response} from 'express';
// import { user_s} from '../models/user';
// import { createToken } from '../middleware/genratetoken';
// import * as bcrypt from 'bcrypt';
// import {compare} from 'bcrypt';
// // export const getalluser = async(req:Request,res:Response,next:NextFunction) => {
// //     try{
// //         const all = await user_s.find();
// //         res.status(200).json(all)
        
// //     }catch(err){
// //         console.log(err);
// //     }};

// export const loginuser= async(req:Request,res:Response,next:NextFunction)=>{
//     try{
//         const { username,password}= req.body;
//         const user_1 =await user_s.findOne({username: username});
//         if(!user_1)
//         {
//              return res.status(404).json("user not found ")
//         }
//         const passwordMatch =  compare(password, user_1.password.toString());
//         if(!passwordMatch)
//         {
//             throw new Error("Email and Password did not Match !!!")
//         }
//         const token = createToken(req)
//         res.send({token:token})
//         res.status(200).json({ message: 'Login successful'});
//     }
//     catch(error)
//     {
//         res.status(500).json("user not found");
//     }
// };
 

// //********************************************************************************************************************** */
// // export const signup = async (req: Request, res: Response, next: NextFunction) => {
// //     try {
      
// //         console.log("req.body",req.body)
// //       const { username, email, password } = req.body;
    
// //       const user_1= new user_s({ username, email, password });
   
// //       await user_1.save();
// //       res.status(201).json(user_1);
     
// //     } catch (err) {
// //         console.log(err)
// //       res.status(500).json({ error: err });
// //     }

// //   };
// export const signup = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         console.log("req.body", req.body);
//         const { username:username, email:email, password:password} = req.body;

//         const saltRounds = 8;
//         const salt = await bcrypt.genSalt(saltRounds);

//         const hashedPassword = await bcrypt.hash(password, salt);

//         const user_1 = new user_s({ username, email, password: hashedPassword });

//         await user_1.save();
//         res.status(201).json(user_1);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err });
//     }
// };

// // export const signup = async(req:Request,res:Response,next:NextFunction) => {
// //     try{
// //     const{username,email,password} = req.body;

// //     // let existinguser
// //     // try{
// //     //  existinguser = await users.findOne({email});
// //     // }catch(err){
// //     //     console.log(err);
// //     // }
// //     // if(existinguser){
// //     //     return res.status(400).json({messege:"user already exist"})
// //     // }
// //     const user = new users({username,email,password});
// //     res.status(201).json(user);
// //     }catch(err){
// //         console.log(err);
// //     }
// // }