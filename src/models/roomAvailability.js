const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomAvailabilitySchema = new Schema(
  {
    hotelId: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    date: { type: Date, required: true }, // Date for room availability
    availableRooms: { type: Number, required: true }, // Initially set to totalRooms
    bookedRooms: { type: Number, default: 0 }, // Number of rooms booked, initially 0
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoomAvailability", roomAvailabilitySchema);
