import express from 'express';
import { roomCreate, roomJoin } from './room.controller';

const router = express.Router();

router.post('/create', roomCreate);
router.post('/join', roomJoin);

export default router;