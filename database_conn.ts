import mongoose from 'mongoose'
const CONNECT_URL = 'mongodb://localhost:27017/mydb';
import * as models from './models/common'
export const dbconn = async() =>{
    try {
        console.log("DB url ", CONNECT_URL);
        const conn = await mongoose.connect(CONNECT_URL);
        console.log(`Mongo db connected: ${conn.connection.host}`);
        models.user_s;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};