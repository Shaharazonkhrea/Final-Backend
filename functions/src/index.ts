import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import recipeRouter from "./routes/recipes"
import userRouter from "./routes/users"

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
app.use("/users", userRouter)

// OPTIONS
app.options("*", cors())

// EXPORT API
export const api = functions.https.onRequest(app)