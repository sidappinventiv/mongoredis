import { Request, Response, NextFunction} from 'express';
import { postsh } from '../../models/post';


export const createpost = async(req:Request,res:Response,next:NextFunction) =>
{
    try{
        const { user_id,content } = req.body;
        const post = new postsh({ user_id,content });
        console.log("chl rha")
        await post.save();
        res.json(post);
    }catch(error){
        res.status(500).json({ error: 'Error creating the post' });
    }
}
