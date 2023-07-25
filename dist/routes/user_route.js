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
const router = express_1.default.Router();
exports.router = router;
router.get("/getalluser", getalluser_1.getalluser);
router.post("/signup", signup_1.signup);
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate a user with their credentials.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/login', login_1.loginuser);
router.post('/createpost', createpost_1.createpost);
router.get('/getpost', getpost_1.getpost);
router.get('/countpost', countpost_1.count_post);
