import express from 'express';
import { signIn, signOut } from './user.controller';

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-out', signOut);

export default router;