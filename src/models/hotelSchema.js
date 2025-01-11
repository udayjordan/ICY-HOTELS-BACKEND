const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoomAvailability = require("./roomAvailability");

const hotelSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: String },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      coordinates: {
        lat: { type: Number, required: false },
        lng: { type: Number, required: false },
      },
    },
    description: { type: String, required: true },
    hotelAmenities: {
      popular: [
        {
          type: String,
          enum: ["Swimming Pool", "Restaurant", "Bar", "Lounge"],
        },
      ],
      basicFacilities: [
        {
          type: String,
          enum: [
            "Power Backup",
            "Free Parking",
            "Air Conditioning",
            "Swimming Pool",
            "Room Service",
            "Free Wi-Fi",
            "Refrigerator",
            "Laundry Service",
            "Smoke Detector",
            "Housekeeping",
            "Ironing Service",
            "Elevator/Lift",
          ],
        },
      ],
      familyAndKids: [
        {
          type: String,
          enum: ["Childcare Services"],
        },
      ],
      foodAndDrinks: [
        {
          type: String,
          enum: ["Dining Area", "Bar", "Restaurant"],
        },
      ],
      safetyAndSecurity: [
        {
          type: String,
          enum: ["Fire Extinguishers", "CCTV"],
        },
      ],
      healthAndWellness: [
        {
          type: String,
          enum: ["First-aid Services"],
        },
      ],
      entertainment: [
        {
          type: String,
          enum: ["Night Club"],
        },
      ],
      generalServices: [
        {
          type: String,
          enum: [
            "Luggage Storage",
            "Wake-up Call",
            "Doctor on Call",
            "Luggage Assistance",
            "Bellboy Service",
            "Pool/Beach towels",
          ],
        },
      ],
      commonArea: [
        {
          type: String,
          enum: [
            "Seating Area",
            "Lounge",
            "Balcony/Terrace",
            "Reception",
            "Outdoor Furniture",
            "Lawn",
          ],
        },
      ],
      businessCenterAndConferences: [
        {
          type: String,
          enum: ["Printer"],
        },
      ],
      otherFacilities: [
        {
          type: String,
          enum: [
            "Kid's Menu",
            "Security Guard",
            "Breakfast",
            "Music System",
            "Sitout Area",
          ],
        },
      ],
    }, // General hotel amenities
    images: [{ type: String }], // Array of hotel image URLs
    // roomTypes: [roomTypeSchema], // Array of room type sub-documents
    ratings: {
      totalRating: { type: Number, default: 0 },
      totalUsers: { type: Number, default: 0 },
    },
    totalRooms: { type: Number, required: true },
  },
  { timestamps: true }
);
// Post-save hook
hotelSchema.post("save", async function (hotel) {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30); // 60 days ahead

  let currentDate = new Date(startDate);

  // Iterate through each day for the next 60 days
  while (currentDate <= endDate) {
    const existingAvailability = await RoomAvailability.findOne({
      hotelId: hotel._id,
      date: currentDate,
    });

    if (!existingAvailability) {
      // Create room availability record for each day
      await RoomAvailability.create({
        hotelId: hotel._id,
        date: currentDate,
        availableRooms: hotel.totalRooms, // Initially set available rooms to total rooms
        bookedRooms: 0,
      });
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
});

module.exports = mongoose.model("Hotel", hotelSchema);
