const config =
  process.env.NODE_ENV !== "production" ? await import("dotenv") : null

if (config) config.config()

export const PORT = process.env.PORT || 5000

export const MONGO_URI = process.env.MONGODB_URI || ""

export const JWT_SECRET = process.env.JWT_SECRET || ""

export const Production = process.env.NODE_ENV === "production"
