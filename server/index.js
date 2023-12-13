const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const app = express();
require("./config/passportConfig.js");

const { notFound, errorHandler } = require("./middleware/errorHandler.js");

// routes
const authRoutes = require("./routes/authRoute.js");
const productRoutes = require("./routes/productRoute.js");
const couponRoutes = require("./routes/couponRoute");
const checkoutRoutes = require("./routes/checkoutRoute.js");

// connect db
const dbConnect = require("./config/dbConnect.js");
dbConnect();

const PORT = process.env.PORT || 6000;

// app.use(cors({ origin: 'https://jolybell-client.vercel.app', credentials: true }));
app.use(cors());
app.use(cookieParser());

app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));


app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/checkout", checkoutRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`Server working on http://localhost:${PORT}`);
});