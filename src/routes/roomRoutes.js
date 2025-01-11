const express = require("express");
const {
  updateRoomCount,
  getAvailableRooms,
} = require("../controllers/roomController");

const router = express.Router();

// Route to get available rooms in a hotels
router.get("/availableroom/info", getAvailableRooms);

//Route to update booked rooms and available rooms
router.put("/update-rooms", updateRoomCount);

module.exports = router;
