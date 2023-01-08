import { model, Schema } from "mongoose"

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

AdminSchema.method("validatePassword", async function (data) {
  return data === this.password
})

const Admin = model("admins", AdminSchema)

export default Admin
