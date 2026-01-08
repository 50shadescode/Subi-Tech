import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectMongo } from "./db/mongo.js"

dotenv.config()

const app = express()

//middleware for handling cors
app.use(cors())
//middleware for json parsing
app.use(express.json())
//connecting mongo db
await connectMongo()

// this is just an example api endpoint
app.get("/api/health", (_, res) => {
  res.json({ status: "Testing backend: OK" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
