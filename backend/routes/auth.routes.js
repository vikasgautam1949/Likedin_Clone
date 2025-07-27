import express from 'express';
import { signup } from '../controllers/auth.controllers.js';
let authRouter = express.Router();

authRouter.post('/signup', signup);