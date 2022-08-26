import { Router } from "express";
import ContactController from "../controllers/ContactController.js";

const contactRouter = new Router()

contactRouter.post('/create', ContactController.create)
contactRouter.post('/edit', ContactController.edit)
contactRouter.get('/get', ContactController.getContacts)

export default contactRouter;