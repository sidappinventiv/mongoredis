"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginuser = void 0;
const user_2 = require("../models/user");
const genratetoken_1 = require("../middleware/genratetoken");
const session_1 = require("../models/session");
const redis_1 = require("redis");
const bcrypt_1 = require("bcrypt");
const client = (0, redis_1.createClient)();
client.on('error', err => console.log('Redis Client Error', err));
client.connect();
// app.use(session(
//     {key: 'jsdgs',
//     resave: true,
//     saveUninitialized: true}))
const loginuser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user_1 = yield user_2.user_s.findOne({ username: username });
        if (!user_1) {
            return res.status(404).json({ error: "User not found" });
        }
        const passwordMatch = yield (0, bcrypt_1.compare)(password, user_1.password.toString());
        if (!passwordMatch) {
            throw new Error("email password not matched");
        }
        const session1 = new session_1.sessionsc({
            user_id: user_1._id,
            status: "Active",
            expire_at: "1000"
        });
        yield session1.save();
        yield client.set('user_id', JSON.stringify(user_1));
        const token = (0, genratetoken_1.createToken)(req);
        // res.send({token:token})
        res.status(200).json({ message: 'Login successful' });
    }
    catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "An error occurred during login" });
    }
});
exports.loginuser = loginuser;
