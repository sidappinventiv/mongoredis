import express from 'express';
import { getalluser } from '../controller/getalluser';
import { signup } from '../controller/signup';
import { loginuser } from '../controller/login';
import { createpost } from '../controller/post/createpost';
import { getpost } from '../controller/post/getpost';
import { count_post } from '../controller/post/countpost';
import { verifyToken } from '../middleware/verify_token';
const swaggerUi = require('swagger-ui-express');


const router = express.Router();
const app = express();
app.use(router);

router.get("/getalluser",getalluser);

router.post("/signup",signup);

router.post('/login',loginuser);
router.post('/createpost',verifyToken,createpost)
router.get('/getpost',getpost)
router.get('/countpost',count_post)
export {router}