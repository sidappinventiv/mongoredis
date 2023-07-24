"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretkey = 'sdfukzsy';
function createToken(req) {
    const key = secretkey;
    const token = jsonwebtoken_1.default.sign({ userId: req.body.email }, key, { expiresIn: "5d" });
    return token;
}
exports.createToken = createToken;
