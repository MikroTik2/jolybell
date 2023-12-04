const express = require("express");
const router = express.Router();
const { createCoupon, getAllCoupon, getCoupon, updateCoupon, deleteCoupon } = require("../controller/couponCtrl");

// post
router.post("/create-coupon", createCoupon);

// get
router.get("/:id", getCoupon);
router.get("/get/all", getAllCoupon);

// put
router.put("/edit/:id", updateCoupon);

// delete
router.put("/delete/:id", deleteCoupon);

module.exports = router;