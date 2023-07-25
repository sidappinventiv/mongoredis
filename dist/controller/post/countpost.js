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
exports.count_post = void 0;
const post_1 = require("../../models/post");
const mongoose_1 = __importDefault(require("mongoose"));
const count_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body;
        const mmatch = {
            $match: { user_id: new mongoose_1.default.Types.ObjectId(req.body.id) }
        };
        const result = yield post_1.postsh.aggregate([mmatch]);
        console.log("xyz", result);
        res.json(result);
    }
    catch (err) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.count_post = count_post;
