import { Router } from "express";
import {
    postRecipe,
    getRecipe,
    getRecipes,
    putRecipe,
    deleteRecipe,
    getUserFavorites,
    toggleFavorite,
} from "../controllers/recipes"

const routes = Router()

routes.post("/", postRecipe)
routes.get("/favorites", getUserFavorites)
routes.get("/:id", getRecipe)
routes.get("/", getRecipes)
routes.put("/:id", putRecipe)
routes.delete("/:id", deleteRecipe)
routes.get('/user/:userId/favorites', getUserFavorites); 
routes.post('/:id/favorite', toggleFavorite);    

export default routes