const express = require("express");
const passport = require('passport');
const cors = require("cors");
const router = express.Router();
const { createUser, loginUser, createUserFirebase, addToCartUpdateSizes, activateUser, addToCartUpdate, addToCartUser, getCartUser, removeToCartUser, addressUser, getAddressUser, refreshTokenUser, logoutUser, updateUser, getUser, resetPassword, getAllUser, forgotPassword, blockUser, unBlockUser, deleteUser, updatePassword } = require("../controller/userCtrl.js");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware.js");

// post
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/google", createUserFirebase);
router.post("/forgot-password", forgotPassword);

// get
router.get('/google', cors({ origin: 'http://localhost:5173', credentials: true }), passport.authenticate('google', {
     scope: ['profile', 'email'],
})
);
router.get('/google/callback', passport.authenticate('google', {

     failureRedirect: '/',

}), (req, res) => {

     res.redirect('http://localhost:5173/account');

});

router.get("/logout", logoutUser);
router.get("/refresh", refreshTokenUser);
router.get("/all-user", getAllUser);
router.get("/cart", authMiddleware, getCartUser);
router.get("/address", authMiddleware, getAddressUser);
router.get("/confirm/:token", activateUser);
router.get("/:id", getUser);

// put
router.put("/update-address", authMiddleware, addressUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/update-password", authMiddleware, updatePassword);
router.put("/cart/add", authMiddleware, addToCartUser);
router.put("/cart/update/size", authMiddleware, addToCartUpdateSizes);
router.put("/cart/update", authMiddleware, addToCartUpdate);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);
router.put("/reset-password/:token", resetPassword);

// delete
router.delete("/cart/remove/:productId", authMiddleware, removeToCartUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);

module.exports = router;