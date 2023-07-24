import { Request, Response, NextFunction, response} from 'express';
import { user_s} from '../models/user';
// import { createToken } from '../middleware/genratetoken';
import * as bcrypt from 'bcrypt';
// import {compare} from 'bcrypt';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username:username, email:email, password:password} = req.body;

        const saltRounds = 8;
        const salt = await bcrypt.genSalt(saltRounds);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user_1 = new user_s({ username, email, password: hashedPassword });

        await user_1.save();
        res.status(201).json(user_1);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};