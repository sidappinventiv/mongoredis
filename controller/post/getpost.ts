import { Request, Response, NextFunction} from 'express';
import { postsh } from '../../models/post';

export const getpost = async(req:Request,res:Response,next:NextFunction)=>{
try {
    console.log("aa gya")
    const posts = await postsh.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving posts' });
  }};