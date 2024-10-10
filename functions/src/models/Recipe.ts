import { Schema, model } from "mongoose"

interface Recipe extends Document {
    title: string;
    ingredients?: string;
    steps: string;
    isFavorited?: boolean;
    category?: string; 
    imageUrl: string;
    createdBy?: string;
}

const RecipeSchema = new Schema(
	{
		title: {
            type: String,
            required: true
        },
        ingredients: {
            type: String,
            required: false
        },
        steps: {
            type: String,
            required: false
        },
        isFavorited: {
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
        },
        createdBy: { 
            type: String, 
            required: false
        }
	},
	{ timestamps: true }
)
const Recipe = model("Recipe", RecipeSchema)

export default Recipe