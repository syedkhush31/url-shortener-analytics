const express = require("express");
const router = express.Router();

const {
  shortenUrl,
  redirectUrl,
  deleteUrl,
  getAllUrls,
} = require("../controllers/urlController");

router.post("/shorten", shortenUrl);

router.get("/urls", getAllUrls);

router.delete("/urls/:id", deleteUrl);

router.get("/:shortCode", redirectUrl);

module.exports = router;
