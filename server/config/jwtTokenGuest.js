const jwt = require("jsonwebtoken");

const generateTokenGuest = (guestUserId) => {
     return jwt.sign({ guestUserId }, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });
};

module.exports = { generateTokenGuest };