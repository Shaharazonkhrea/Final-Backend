import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import recipeRouter from "./routes/recipes"

// CONFIG

const app = express()

// CORS Middleware
app.use(
	cors({
		origin: true,
		methods: ["GET", "POST", "OPTIONS"]
	})
)

// PUBLIC ROUTES
app.use("/recipes", recipeRouter)

// OPTIONS
app.options("*", cors())

// EXPORT API
export const api = functions.https.onRequest(app)