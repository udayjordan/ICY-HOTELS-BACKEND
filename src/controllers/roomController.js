const RoomAvailability = require("../models/roomAvailability");
const Hotel = require("../models/hotelSchema");

// controller to update room count based on booking
const updateRoomCount = async (req, res) => {
  const { hotelId, date, bookedRooms } = req.body;

  try {
    // Find or create room availability for the given date
    let availability = await RoomAvailability.findOne({
      hotelId,
      date: new Date(date),
    });

    if (!availability) {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }

      //  the  availableRooms are set to totalRooms and bookedRooms are set to 0
      availability = new RoomAvailability({
        hotelId,
        date: new Date(date),
        availableRooms: hotel.totalRooms,
        bookedRooms: 0,
      });
    }

    // Check if enough rooms are available before booking
    if (availability.availableRooms < bookedRooms) {
      return res.status(400).json({ message: "Not enough rooms available" });
    }

    // Update the bookedRooms and availableRooms fields
    availability.bookedRooms += bookedRooms;
    availability.availableRooms -= bookedRooms;

    await availability.save();
    res.status(200).json({ message: "Room count updated", availability });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controller to get available rooms
const getAvailableRooms = async (req, res) => {
  const { hotelId, date } = req.query;

  try {
    const availability = await RoomAvailability.findOne({
      hotelId,
      date: new Date(date),
    });

    if (!availability) {
      return res
        .status(404)
        .json({ message: "No availability data found for the given date" });
    }

    res.status(200).json({ availableRooms: availability.availableRooms });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { updateRoomCount, getAvailableRooms };
