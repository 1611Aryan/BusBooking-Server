import Bus from "../Models/Bus.model.js"

export const viewBusses = async (req, res) => {
  try {
    const Busses = await Bus.find().lean()
    return res.status(200).send({ payload: Busses })
  } catch (err) {
    console.log({ viewBusses: err })
    return res.status(500).send({ err })
  }
}

export const bookSeat = async (req, res) => {
  const { name, seat } = req.body
  try {
    await Bus.updateOne(
      {
        name,
      },
      {
        $set: {
          [`seats.${seat - 1}`]: true,
        },
      }
    ).lean()

    return res.status(200).send({ message: "Seat Booked" })
  } catch (err) {
    console.log({ bookSeat: err })
    return res.status(500).send({ err })
  }
}

export const releaseSeat = async (req, res) => {
  const { name, seat } = req.body
  try {
    await Bus.updateOne(
      {
        name,
      },
      {
        $set: {
          [`seats.${seat - 1}`]: false,
        },
      }
    ).lean()

    return res.status(200).send({ message: "Seat Booked" })
  } catch (err) {
    console.log({ bookSeat: err })
    return res.status(500).send({ err })
  }
}

export const createBus = async (req, res) => {
  const { name } = req.body
  try {
    await Bus.create({ name })
    return res.status(201).send({ message: "Bus Created" })
  } catch (err) {
    console.log({ createBus: err })
    return res.status(500).send({ err })
  }
}
