// admin.route.js

import express from 'express';
import { createUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/createUser', createUser);

export default router;
