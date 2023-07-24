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
exports.createpost = void 0;
const post_1 = require("../../models/post");
const createpost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, content } = req.body;
        const post = new post_1.postsh({ user_id, content });
        console.log("chl rha");
        yield post.save();
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating the post' });
    }
});
exports.createpost = createpost;
