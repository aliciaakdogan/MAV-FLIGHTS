import Express from "express";
import mongoose from "mongoose";

const app = Express();

const flightSchema = new mongoose.Schema({
  destination: {
    type: "String",
    required: true,
  },
  airport: {
    type: "String",
    required: true,
  },
  airline: {
    type: "String",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
    min: 0,
  },
  departure: {
    type: "Date",
    required: true,
  },
  arrival: {
    type: "Date",
    required: true,
  },
  flightTime: {
    type: "Number",
    required: true,
  },
});

const Flight = mongoose.model("flights", flightSchema);

async function main() {
  await mongoose.connect(
    "mongodb+srv://alicia:alicia@cluster0.ok7cjmg.mongodb.net/?retryWrites=true&w=majority"
  );

  const flights = await Flight.find();
}
main();
