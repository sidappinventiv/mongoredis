"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsh = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
;
const post = new Schema({
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    // created_at:{
    //     type:Date,
    //     required:true
    // },
    // updated_at:{
    //     type:Date,
    //     required:true
    // },
    content: {
        type: String,
        required: true
    }
    // post_img_url:{
    //   type:String,
    //   required:true
    // }
});
const postsh = mongoose_1.default.model('posts', post);
exports.postsh = postsh;
