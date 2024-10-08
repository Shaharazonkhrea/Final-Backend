import { Router } from "express";
import {
    postRecipe,
    getRecipe,
    getRecipes,
    putRecipe,
    deleteRecipe,
    getUserFavorites
} from "../controllers/recipes"

const routes = Router()

routes.post("/", postRecipe)
routes.get("/:id", getRecipe)
routes.get("/", getRecipes)
routes.put("/:id", putRecipe)
routes.delete("/:id", deleteRecipe)
routes.get("/favorites", getUserFavorites)

export default routes