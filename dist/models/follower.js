"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersh = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const followers = new mongoose_1.default.Schema({
    follower_id: {
        type: Number,
        required: true
    },
    following_id: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'accepted', 'pending'],
        required: true
    },
});
const followersh = mongoose_1.default.model('followers', followers);
exports.followersh = followersh;
