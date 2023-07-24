import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const secretkey ='sdfukzsy'

export function createToken(req:Request){

    const key = secretkey;
    const token = jwt.sign(
        
        { userId: req.body.email },key,{ expiresIn: "5d" }
    );
    return token
}