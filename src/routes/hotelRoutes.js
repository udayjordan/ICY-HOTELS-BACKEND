const express = require("express");
const {
  getAllHotels,
  getHotelsByCity,
} = require("../controllers/hotelController");

const router = express.Router();

// Route to get all hotel details
router.get("/", getAllHotels);

// Route to get hotels by city
router.get("/:city", getHotelsByCity);

module.exports = router;
