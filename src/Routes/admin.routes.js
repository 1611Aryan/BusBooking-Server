import { Router } from "express"
import AdminLogin from "../Controllers/Admin.controller.js"
import { releaseSeat } from "../Controllers/Bus.controller.js"

const AdminRouter = Router()

AdminRouter.post("/", AdminLogin)

AdminRouter.post("/release", releaseSeat)

export default AdminRouter
