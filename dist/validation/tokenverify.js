"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    name: joi_1.default.string().pattern(new RegExp(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/)).trim().min(2).max(30).required(),
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi_1.default.string().token().min(5).max(30).required(),
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi_1.default.string().token().min(5).max(30).required(),
});
