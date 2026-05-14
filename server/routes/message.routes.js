import express from 'express'
import {getAllUsers,getMessages,sendMessage} from '../controller/message.controller.js'
import {isAuthenticated} from '../middlewares/auth.middleware.js'


const router = express.Router()

router.get("/users",isAuthenticated,getAllUsers);
router.get("/:id",isAuthenticated,getMessages);
router.post("/send/:id",isAuthenticated,sendMessage);

export default router