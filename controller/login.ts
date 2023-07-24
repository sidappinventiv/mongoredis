import { Request, Response, NextFunction, response} from 'express';
import { user_s} from '../models/user';
import { createToken } from '../middleware/genratetoken';
// import * as bcrypt from 'bcrypt';
import {compare} from 'bcrypt';
export const loginuser= async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const { username,password}= req.body;
        const user_1 =await user_s.findOne({username: username});
        if(!user_1)
        {
             return res.status(404).json("user not found ")
        }
        const passwordMatch =  compare(password, user_1.password.toString());
        if(!passwordMatch)
        {
            throw new Error("Email and Password did not Match !!!")
        }
        const token = createToken(req)
        res.send({token:token})
        res.status(200).json({ message: 'Login successful'});
    }
    catch(error)
    {
        res.status(500).json("user not found");
    }
};