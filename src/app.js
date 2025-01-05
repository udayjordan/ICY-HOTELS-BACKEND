const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

module.exports = app;
