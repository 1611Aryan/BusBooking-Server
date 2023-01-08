import User from "../Models/User.model.js"

const Signup = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password)
      return res.status(400).send({ message: "Incompleted Information" })
    const exists = await User.findOne({ email }).lean()
    if (exists)
      return res
        .status(409)
        .send({ message: "Email Aready in use. Try logging in instead" })
    await User.create({
      email,
      password,
    })
    return res.status(201).send({ message: "Account Created" })
  } catch (err) {
    console.log({ Signup: err })
    return res.status(500).send({ err })
  }
}

export default Signup
