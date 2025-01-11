const express = require("express");
const {
  createHotel,
  getAllHotels,
  getHotelsByCity,
} = require("../controllers/hotelController");

const router = express.Router();
// Route to create a new hotel
router.post("/list-hotels", createHotel);

// Route to get all hotel details
router.get("/info", getAllHotels);

// Route to get hotels by city
router.get("/info/:city", getHotelsByCity);

module.exports = router;
