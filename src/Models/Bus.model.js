import { model, Schema } from "mongoose"

const BusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    seats: {
      type: [Boolean],
      default: new Array(50).fill(false),
    },
  },
  {
    timestamps: true,
  }
)

const Bus = model("Bus", BusSchema)

export default Bus
