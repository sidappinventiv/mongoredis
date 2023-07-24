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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getalluser = void 0;
const user_1 = require("../models/user");
const ioredis_1 = __importDefault(require("ioredis"));
const RedisClient = new ioredis_1.default({
    host: '127.0.0.1',
    port: 6379
});
const getalluser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield user_1.user_s.find();
        const keyName = 'user';
        let responsearray = '';
        const getcachedata = yield RedisClient.get(keyName);
        if (getcachedata) {
            responsearray = getcachedata;
            console.log('get cache');
        }
        else {
            responsearray = all;
            console.log('set cache');
            RedisClient.set(keyName, JSON.stringify(all));
        }
        res.status(200).json(all);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getalluser = getalluser;
