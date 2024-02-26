// admin.route.js

import express from 'express';
import { createAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/createadmin', createAdmin);

export default router;
