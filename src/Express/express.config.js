import compression from "compression"
import cookieParser from "cookie-parser"
import cors from "cors"

import express from "express"
import helmet from "helmet"
import morgan from "morgan"

const ExpressConfig = () => {
  const app = express()
  app.use(compression())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(
    cors({
      origin:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:3000"
          : "https://convrsebusbook.netlify.app/",
      credentials: true,
    })
  )

  app.use(helmet())
  app.use(cookieParser())
  app.use(morgan("dev"))

  return app
}

export default ExpressConfig
