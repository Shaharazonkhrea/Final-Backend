import { Router } from "express";
import { 
    postUser,
    getUser,
    getUsers,
    putUser,
    deleteUser
 } from "../controllers/users";

const routes = Router()

routes.post("/", postUser)
routes.get("/:id", getUser)
routes.get("/", getUsers)
routes.put("/:id", putUser)
routes.delete("/:id", deleteUser)

export default routes