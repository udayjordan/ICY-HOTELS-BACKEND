const express = require("express");
const { checkUser, createUser } = require("../controllers/userController");
const router = express.Router();

// Route for check if user exists
router.post("/check-user", checkUser);

// Route for creating a new user
router.post("/create-user", createUser);

module.exports = router;
