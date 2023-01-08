import jwt from "jsonwebtoken"

const Authorize = async (req, res, next) => {
  const token = req.cookies["bus-jwt"]
  if (!token) return res.sendStatus(401)

  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

  if (!verifiedToken) return res.clearCookie("jwt").sendStatus(401)

  req.user = verifiedToken.id
  return next()
}

export default Authorize
