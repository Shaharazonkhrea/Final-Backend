import Recipe from "../models/Recipe";
import establishConnection from "../establishConnection";
import HTTPHandler from "../interfaces/HTTPHandler";

// CREATE
export const postRecipe: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();

        const recipe = new Recipe({
            ...req.body,
			createdBy: req.body.createdBy
        });

        await recipe.save(); 

        res.status(201).send(recipe); 
    } catch (err) {
        console.error("Error creating recipe:", err);
        res.status(400).send("Bad Request"); 
    }
};

export const getUserRecipes: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const recipes = await Recipe.find({ createdBy: req.params.userId }); 
        res.status(200).send(recipes);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};


export const getUserFavorites: HTTPHandler = async (req, res) => {
	try {
	  await establishConnection(); 
	  const userFavorites = await Recipe.find({
		createdBy: req.params.userId,  
		isFavorite: true,              
	  });
  
	  res.status(200).send(userFavorites);
	} catch (err) {
	  console.error("Error fetching user favorites:", err);
	  res.status(500).send("Error fetching favorites");
	}
  };

export const toggleFavorite: HTTPHandler = async (req, res) => {
	try {
	  await establishConnection();
  
	  const recipe = await Recipe.findById(req.params.id);
  
	  if (!recipe) {
        throw new Error();
    }
	  recipe.isFavorite = !recipe.isFavorite;
    await recipe.save();

    res.status(200).send(recipe);
  } catch (err) {
    console.error("Error toggling favorite status:", err);
    res.status(500).send("Server Error");
  }
};

// READ 1
export const getRecipe: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).send(recipe);
    } catch (err) {
        res.status(404).send("Recipe Not Found");
    }
};

// READ ALL
export const getRecipes: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const recipes = await Recipe.find();
        res.status(200).send(recipes);
    } catch (e: any) {
        res.status(500).send("Server Error");
    }
};

// UPDATE
export const putRecipe: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(recipe);
    } catch (err) {
        res.status(404).send("Recipe Not Found");
    }
};

// DESTROY
export const deleteRecipe: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(404).send("Recipe Not Found");
    }
};


