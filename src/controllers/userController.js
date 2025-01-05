const User = require("../models/userModel");

// this controller is used to check wether user exists or not
const checkUser = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    const existingUser = await User.findOne({ phoneNumber });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        exists: true,
        user: {
          phoneNumber: existingUser.phoneNumber,
          name: existingUser.name,
          createdAt: existingUser.createdAt,
        },
      });
    } else {
      return res.status(200).json({
        success: true,
        exists: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error in checking User", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
//create new user
const createUser = async (req, res) => {
  try {
    const { phoneNumber, name } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "phone number is required",
      });
    }
    // FULL-STACK DEV CAN COMMIT THIS LINE OF CODE
    // Check if user already exists
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({ phoneNumber, name });
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        phoneNumber: newUser.phoneNumber,
        name: newUser.name,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = { checkUser, createUser };
