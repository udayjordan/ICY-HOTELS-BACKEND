import mongoose, { Schema } from "mongoose";

const Schema = new Schema({
  hotelId: {},
  userId: {},
  rating: {},
  feedback: {},
});

export const Hotel = mongoose.model("Hotel", Schema);
