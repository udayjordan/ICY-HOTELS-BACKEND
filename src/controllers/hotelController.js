const Hotel = require("../models/hotelSchema");
// Controller function to create a new hotel
const createHotel = async (req, res) => {
  try {
    const {
      name,
      owner,
      location,
      description,
      hotelAmenities,
      images,
      totalRooms,
      ratings,
    } = req.body;

    // Create a new hotel document
    const newHotel = new Hotel({
      name,
      owner,
      location,
      description,
      hotelAmenities,
      images,
      totalRooms,
      ratings,
    });

    // Save the hotel to the database
    const savedHotel = await newHotel.save();

    res.status(201).json({
      message: "Hotel created successfully",
      hotel: savedHotel,
    });
  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(500).json({ message: "Error creating hotel", error });
  }
};
// Controller function to get all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ message: "Error fetching hotels", error });
  }
};

// Controller function to fetch hotels by city
const getHotelsByCity = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase(); // Get city from URL params

    // Retrieve all hotels from the db
    const hotelData = await Hotel.find();

    // Filter hotels by city
    const filteredHotels = hotelData.filter(
      (hotel) => hotel.location.city.toLowerCase() === city
    );

    if (filteredHotels.length === 0) {
      return res
        .status(404)
        .json({ message: `No hotels found in ${req.params.city}` });
    }

    res.status(200).json(filteredHotels);
  } catch (error) {
    console.error("Error fetching hotels by city:", error);
    res.status(500).json({ message: "Error fetching hotels by city", error });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelsByCity,
};
