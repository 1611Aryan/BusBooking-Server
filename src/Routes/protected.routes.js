import { Router } from "express"
import {
  bookSeat,
  createBus,
  viewBusses,
} from "../Controllers/Bus.controller.js"

const ProtectedRouter = Router()

ProtectedRouter.get("/view", viewBusses)

ProtectedRouter.post("/book", bookSeat)

ProtectedRouter.post("/create", createBus)

export default ProtectedRouter
