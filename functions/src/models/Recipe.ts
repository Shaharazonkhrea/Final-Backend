import { Schema, model } from "mongoose"

const RecipeSchema = new Schema(
	{
		title: {
            type: String,
            required: true
        },
        ingredients: {
            type: String,
            required: true
        },
        steps: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false
        },
        category: {
            type: String,
            required: false
        },
        imageUrl: {
            type: String,
            required: true
        }
	},
	{ timestamps: true }
)
const Recipe = model("Recipe", RecipeSchema)

export default Recipe