import { Request, Response, NextFunction, response} from 'express';
import { user_s} from '../models/user';
import { createToken } from '../middleware/genratetoken';
// var session = require('express-session');
import {sessionsc} from '../models/session'
const express = require('express');
const app = express();
import { createClient } from 'redis';
const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
client.connect();





// import * as bcrypt from 'bcrypt';
import {compare} from 'bcrypt';

// app.use(session(
//     {secret: 'jsdgs',
//     resave: true,
//     saveUninitialized: true}))
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
        // const token = createToken(req)
        req.body.authorization = 
        
        // res.send({token:token})
        res.status(200).json({ message: 'Login successful'});
    }
    catch(error)
    {
        res.status(500).json("user not found");
    }
};