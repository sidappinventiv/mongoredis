"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.likes = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const replyschema = new mongoose_1.default.Schema({
    text: {
        type: String,
        required: true,
    },
});
const comments = new mongoose_1.default.Schema({
    post_id: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    reply: [replyschema],
    // {
    //     type:Text,
    //     required:true
    // },
    updated_at: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
});
exports.likes = new mongoose_1.default.Schema({
    count: {
        type: Number,
        required: true
    },
    post_id: { ref: "posts",
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'accepted', 'pending'],
        required: true
    },
});
const actionsch = new mongoose_1.default.Schema({
    post_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Post',
        Required: true
    },
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    },
    comments: [comments],
    likes: [exports.likes]
});
const action = mongoose_1.default.model('action', actionsch);
exports.action = action;
const comment = mongoose_1.default.model('Comment', comments);
const like = mongoose_1.default.model('Like', exports.likes);
const reply = mongoose_1.default.model('Reply', replyschema);
