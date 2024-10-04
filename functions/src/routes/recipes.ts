import { Router } from "express";
import {
    postRecipe,
    getRecipe,
    getRecipes,
    putRecipe,
    deleteRecipe
} from "../controllers/recipes"
import { getFavoriteRecipes } from "../controllers/recipes";

const routes = Router()

routes.post("/", postRecipe)
routes.get("/:id", getRecipe)
routes.get("/", getRecipes)
routes.put("/:id", putRecipe)
routes.delete("/:id", deleteRecipe)
routes.get("/favorites/:userId", getFavoriteRecipes)

export default routes