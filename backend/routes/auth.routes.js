import express from 'express';
import { signup ,login, logOut} from '../controllers/auth.controllers.js';
let authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/logout', logOut)

export default authRouter;