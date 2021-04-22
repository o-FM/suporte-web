import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingController";
import { UsersController } from "./controllers/UsersController";


const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messageController = new MessagesController()

routes.post("/settings", settingsController.create)

routes.post("/users", usersController.create)

routes.get("/messages/:id", messageController.showByUser)
routes.post("/messages", messageController.create)

export { routes }