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
// import * as bcrypt from 'bcrypt';
const bcrypt_1 = require("bcrypt");
const loginuser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user_1 = yield user_2.user_s.findOne({ username: username });
        if (!user_1) {
            return res.status(404).json("user not found ");
        }
        const passwordMatch = (0, bcrypt_1.compare)(password, user_1.password.toString());
        if (!passwordMatch) {
            throw new Error("Email and Password did not Match !!!");
        }
        const token = (0, genratetoken_1.createToken)(req);
        res.send({ token: token });
        res.status(200).json({ message: 'Login successful' });
    }
    catch (error) {
        res.status(500).json("user not found");
    }
});
exports.loginuser = loginuser;
