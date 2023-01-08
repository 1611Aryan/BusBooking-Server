import { Router } from "express"
import Login from "../Controllers/Login.controller.js"
import Signup from "../Controllers/Signup.controller.js"

const PublicRouter = Router()

PublicRouter.post("/", Login)
PublicRouter.post("/signup", Signup)

export default PublicRouter
