import express from 'express';
import { getMessages, sendMessage } from '../controllers/messagecontroller.js';
import protectRoute from '../middleware/protectroute.js';

const router = express.Router();

router.get("/:id",protectRoute,getMessages);
//before sendMessage check user is logged in or not
router.post("/send/:id",protectRoute,sendMessage);


export default router;