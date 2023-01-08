import jwt from "jsonwebtoken"
import { JWT_SECRET, Production } from "../Env.js"
import User from "../Models/User.model.js"

const Login = async (req, res) => {
  const { email, password } = req.body

  try {
    const exists = await User.findOne({ email })
    if (!exists)
      return res.status(401).send({ message: "Incorrect Credentials" })
    if (!(await exists.validatePassword(password)))
      return res.status(401).send({ message: "Incorrect Credentials" })

    const payload = { name: exists.name, email: exists.email, id: exists._id }
    const token = jwt.sign(payload, JWT_SECRET)
    return res
      .cookie("bus-jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: Production,
        secure: Production,
      })
      .status(202)
      .send({ message: "Login Successfull", payload })
  } catch (err) {
    console.log({ Login: err })
    return res.status(500).send({ err })
  }
}

export default Login
