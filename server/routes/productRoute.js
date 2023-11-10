const express = require("express");
const router = express.Router();
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productCtrl.js");

// post
router.post("/create-product", createProduct);

// get
router.get("/:id", getProduct);
router.get("/", getAllProduct);

// put
router.put("/update-product/:id", updateProduct);

// delete
router.delete("/:id", deleteProduct);

module.exports = router;