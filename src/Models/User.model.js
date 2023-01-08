import bcrypt from "bcrypt"
import { model, Schema } from "mongoose"

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    booked: {
      type: [
        {
          bus: String,
          seat: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

UserSchema.method("validatePassword", async function (data) {
  return await bcrypt.compare(data, this.password)
})

const User = model("users", UserSchema)

export default User
