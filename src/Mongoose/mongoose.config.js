import mongoose from "mongoose"
import { MONGO_URI } from "../Env.js"

const MongoConfig = async () => {
  mongoose.set("strictQuery", false)
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Database is Connected")
  } catch (err) {
    throw err
  }
}

export default MongoConfig
