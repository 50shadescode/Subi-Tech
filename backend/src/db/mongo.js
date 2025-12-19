
import mongoose from "mongoose"

export async function connectMongo() {
  try {
    //TODO: this reads from environment variables(.env file)
    //TODO: .env is to that secure in production, so you might find a way to use secrets in your cloud provider
    //TODO: remove these lines once you see "MongoDB connected"
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")
  } catch (err) {
    console.error("MongoDB connection failed", err)
    process.exit(1)
  }
}
