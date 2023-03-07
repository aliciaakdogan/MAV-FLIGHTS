import Express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = Express();

app.use(cors({ origin: "*" }));

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
    type: Number,
    required: true,
    min: 0,
  },
  departure: {
    type: Date,
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
  flightTime: {
    type: Number,
    required: true,
  },
  googleMapsUrl: {
    type: String,
    required: true,
  },
  seats: {
    type: [Boolean],
    required: true,
  },
});

const Flight = mongoose.model("flights", flightSchema);

async function main() {
  await mongoose.connect(
    "mongodb+srv://alicia:alicia@cluster0.ok7cjmg.mongodb.net/?retryWrites=true&w=majority"
  );

  app.get("/flights", async (req, res) => {
    await Flight.updateMany(
      {},
      {
        $set: {
          seats: Array(20)
            .fill(null)
            .map(() => Math.random() > 0.5),
        },
      }
    );
    const flights = await Flight.find();
    res.send(flights);
  });
  app.listen(3000);
}
main();
