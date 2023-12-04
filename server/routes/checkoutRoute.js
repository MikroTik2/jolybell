const express = require("express");
const router = express.Router();
const { createCheckoutSession } = require("../controller/userCtrl.js");
const { authMiddleware } = require("../middleware/authMiddleware.js");

// post
router.post("/", authMiddleware, createCheckoutSession);

module.exports = router;
