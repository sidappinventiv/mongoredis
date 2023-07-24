import { Request, Response, NextFunction, response} from 'express';
import { user_s} from '../models/user';
import Redis from 'ioredis';




const RedisClient = new Redis({
    host:'127.0.0.1',
    port:6379
});

export const getalluser = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const all = await user_s.find();
        const keyName = 'user';
        let responsearray:any='';
        const getcachedata = await RedisClient.get(keyName);

        if(getcachedata){
            responsearray = getcachedata;
            console.log('get cache')
        } else{
            responsearray = all;
            console.log('set cache');
            RedisClient.set(keyName,JSON.stringify(all))
        }
        res.status(200).json(all)
        
    }catch(err){
        console.log(err);
    }};


  
    