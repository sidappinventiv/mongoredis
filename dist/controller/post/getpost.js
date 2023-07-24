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
exports.getpost = void 0;
const post_1 = require("../../models/post");
const getpost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("aa gya");
        const posts = yield post_1.postsh.find();
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving posts' });
    }
});
exports.getpost = getpost;
