import { Request, Response, NextFunction} from 'express';
import { postsh } from '../../models/post';
import mongoose from "mongoose";
export const count_post=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const id=req.body;
        const mmatch = {
            $match: { user_id: new mongoose.Types.ObjectId(req.body.id) } 
          };
      
          const result = await postsh.aggregate([mmatch]);
          console.log("xyz",result)
        res.json(result) 
    }
    catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}