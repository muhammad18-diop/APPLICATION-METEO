const express = require("express");
const cors = require("cors");

const meteoRoutes = require("./routes/route");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// routes
app.use("/", meteoRoutes);

module.exports = app;