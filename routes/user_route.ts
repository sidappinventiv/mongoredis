import express from 'express';
import { getalluser } from '../controller/getalluser';
import { signup } from '../controller/signup';
import { loginuser } from '../controller/login';
import { createpost } from '../controller/post/createpost';
import { getpost } from '../controller/post/getpost';
import { count_post } from '../controller/post/countpost';
const router = express.Router();

router.get("/getalluser",getalluser);

router.post("/signup",signup);
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
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
router.post('/login',loginuser);
router.post('/createpost',createpost)
router.get('/getpost',getpost)
router.get('/countpost',count_post)
export {router}