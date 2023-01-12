import mongoose from "mongoose";

const flightSchema = mongoose.Schema(
  {
    flight_name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    departure_time: {
      type: String,
      required: true,
    },
    departure_date: {
      type: String,
      required: true,
    },
    arrival_time: {
      type: String,
      required: true,
    },
    arrival_date: {
      type: String,
      required: true,
    },
    price_adult: {
      type: String,
      required: true,
    },
    price_baby: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },

    seats: [],
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;
