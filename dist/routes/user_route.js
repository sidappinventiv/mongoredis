"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const getalluser_1 = require("../controller/getalluser");
const signup_1 = require("../controller/signup");
const login_1 = require("../controller/login");
const createpost_1 = require("../controller/post/createpost");
const getpost_1 = require("../controller/post/getpost");
const countpost_1 = require("../controller/post/countpost");
const verify_token_1 = require("../middleware/verify_token");
const swaggerUi = require('swagger-ui-express');
const router = express_1.default.Router();
exports.router = router;
const app = (0, express_1.default)();
app.use(router);
router.get("/getalluser", getalluser_1.getalluser);
router.post("/signup", signup_1.signup);
router.post('/login', login_1.loginuser);
router.post('/createpost', verify_token_1.verifyToken, createpost_1.createpost);
router.get('/getpost', getpost_1.getpost);
router.get('/countpost', countpost_1.count_post);
