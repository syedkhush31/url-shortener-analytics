const express = require("express");
const cors = require("cors");

const { redirectUrl } = require("./controllers/urlController");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("URL Shortener API is running...");
});

// API Routes
app.use("/api", urlRoutes);

// Redirect Route
app.get("/:shortCode", redirectUrl);

module.exports = app;
