import { PORT } from "./Env.js"
import ExpressConfig from "./Express/express.config.js"
import Authorize from "./Middleware/authorize.middleware.js"
import MongoConfig from "./Mongoose/mongoose.config.js"
import AdminRouter from "./Routes/admin.routes.js"
import ProtectedRouter from "./Routes/protected.routes.js"
import PublicRouter from "./Routes/public.routes.js"

const app = ExpressConfig()
await MongoConfig()

app.use("/", PublicRouter)
app.use("/bus", Authorize, ProtectedRouter)
app.use("/admin", AdminRouter)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
