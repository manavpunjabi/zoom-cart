const express = require("express");
const router = express.Router();

// @route   GET api/orders
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Order route"));

module.exports = router;
