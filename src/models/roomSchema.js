import mongoose from 'mongoose'

const availabilitySchema = new mongoose.Schema({
    date: { type: Date, required: true }, // Specific date for availability
    availableRooms: { type: Number, required: true } // Number of rooms available on that date
});

const roomTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Deluxe", "Budget", "Icy choice"]
    }, // e.g., "Deluxe", "Budget"
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    description: { type: String, required: true }, // Room-specific description
    amenities: [{ type: String }], // e.g., ['WiFi', 'TV', 'Mini Bar']
    pricePerNight: { type: Number, required: true }, // Price for this room type
    availability: [availabilitySchema], // Array of availability by date
    amenities: [{
        type: String,
        enum: ["Geyser/ Water heater", "Hot & Cold Water", "Toiletries",
            "Western Toilet Seat", "Air Conditioning", "Housekeeping",
            "In Room dining", "Mineral Water", "Room service",
            "Wifi", "Curtains", "Charging points", "Bathroom", "Jetspray",
            "Kettle", "Mini Bar", "Mini Fridge", "Telephone", "TV", "Safe",
            "Dental Kit", "Shower cubicle", "Shaving Mirror", "Balcony",
            "Terrace", "Sound Speakers"
        ]
    }]
});