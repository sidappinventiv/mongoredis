import { Request, Response, NextFunction, response} from 'express';
import { user_s} from '../models/user';
import { createToken } from '../middleware/genratetoken';
import {sessionsc} from '../models/session'
import { createClient } from 'redis';
import {compare} from 'bcrypt';
const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
client.connect();
// app.use(session(
//     {key: 'jsdgs',
//     resave: true,
//     saveUninitialized: true}))
export const loginuser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const user_1 = await user_s.findOne({ username: username });

        if (!user_1) {
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await compare(password, user_1.password.toString());

        if (!passwordMatch) {
            throw new Error("email password not matched");
        }

        const session1 = new sessionsc({
            user_id: user_1._id,
            status: "Active",
            expire_at: "1000"
        });

        await session1.save(); 
 await client.set('user_id', JSON.stringify(user_1));

        const token = createToken(req);
 // res.send({token:token})
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "An error occurred during login" });
    }
};