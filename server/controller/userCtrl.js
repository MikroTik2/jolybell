const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const LiqPay = require("../my_modules/liqpay.js");
const User = require("../models/userModel.js");
const Product = require("../models/productModel.js");
const Coupon = require("../models/couponModel.js");
const Order = require("../models/orderModel.js");
const sendEmail = require("./emailCtrl.js");
const validateMongoDbId = require("../utils/validateMongoDbId.js");
const { generateToken } = require("../config/jwtToken.js");
const { generateRefreshToken } = require("../config/refreshToken.js");

const liqpay = new LiqPay(process.env.PUBLIC_LIQPAY_KEY, process.env.PRIVATE_LIQPAY_KEY);

// create a user
const createUser = asyncHandler(async (req, res) => {
     const { email, password, repeatPassword } = req.body;

     if (password !== repeatPassword) {

          throw new Error("Passwords do not match");

     } else {

          const findUser = await User.findOne({ email });
   
          if (!findUser) {

               const newUser = await User.create(req.body);

               res.json({
                    _id: newUser?._id,
                    firstname: newUser?.firstname,
                    lastname: newUser?.lastname,
                    parentname: newUser?.parentname,
                    email: newUser?.email,
                    role: newUser?.role,
                    expired: newUser?.expires,
                    confirmed: newUser?.confirmed,
                    deliveryAddress: newUser?.deliveryAddress,
                    token: generateToken(newUser?._id),
               });

               const confirmationLink = `http://localhost:4000/api/user/confirm/${newUser.confirmationToken}`;
               const emailContent = `Please click the following link to confirm your email: <a href="${confirmationLink}">Confirm</a>`;
               const emailOptions = {
                    email: newUser.email,
                    subject: 'Email Confirmation',
                    html: emailContent,
               };
               
               await sendEmail(emailOptions);
               
               
          } else {
               throw new Error("User already exists");
          };
     };
});

// create a user firebase
const createUserFirebase = asyncHandler(async(req, res) => {
     const { userDataFromGoogleAuth } = req.body;

     try {

          const newUser = await User.create(userDataFromGoogleAuth);

          res.json({
               _id: newUser?._id,
               displayName: newUser?.displayName,
               firstname: newUser?.firstname,
               lastname: newUser?.lastname,
               parentname: newUser?.parentname,
               email: newUser?.email,
               role: newUser?.role,
               expired: newUser?.expires,
               confirmed: newUser?.confirmed,
               deliveryAddress: newUser?.deliveryAddress,
               token: generateRefreshToken(newUser._id)
          })

     } catch (error) {
          throw new Error("User already exists");
     };
});

// login a user
const loginUser = asyncHandler(async (req, res) => {
     const { email, password } = req.body;
     const findUser = await User.findOne({ email });

     if (findUser && (await findUser.isPasswordMatched(password))) {

          const refreshToken = await generateRefreshToken(findUser?._id);
          const updateUser = await User.findByIdAndUpdate(findUser._id, {
               refreshToken: refreshToken,
          }, { new: true });

          res.cookie("refreshToken", refreshToken, {
               httpOnly: true,
               maxAge: 72 * 60 * 60 * 1000,
          });

          res.json({
               _id: findUser?._id,
               firstname: findUser?.firstname,
               lastname: findUser?.lastname,
               parentname: findUser?.parentname,
               email: findUser?.email,
               role: findUser?.role,
               expired: findUser?.expires,
               confirmed: findUser?.confirmed,
               deliveryAddress: findUser?.deliveryAddress,
               token: generateToken(findUser?._id),
          });
     } else {
          throw new Error("Invalid credentials");
     };
});

// activate a user
const activateUser = asyncHandler(async (req, res) => {
     const { token } = req.params;

     try { 

          const user = await User.findOne({ confirmationToken: token });
          if (!user) throw new Error("Invalid confirmation link");

          user.confirmed = true;
          user.confirmationToken = undefined;

          await user.save();

          res.json({ message: 'Email confirmed successfully' });

     } catch (error) {
          throw new Error(error);
     };
});

// logout a user
const logoutUser = asyncHandler(async (req, res) => {
     const cookie = req.cookies;
     if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");

     const refreshToken = cookie.refreshToken;
     const user = await User.findOne({ refreshToken });

     if (!user) {

          res.clearCookie({
               httpOnly: true,
               secure: true,
          });

          return res.sendStatus(204);

     };

     await User.findOneAndUpdate({ refreshToken: refreshToken }, {
          refreshToken: "",
     });

     res.clearCookie("refreshToken", {
          httpOnly: true,
          secure: true,
     });

     res.sendStatus(204);
});

// get address a user
const getAddressUser = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          const deliveryAddress = user.deliveryAddress;

          res.json(deliveryAddress);

     } catch (error) {
          throw new Error(error);
     };
});

// refresh token a user
const refreshTokenUser = asyncHandler(async (req, res) => {
     const cookie = req.cookies;
     if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");

     const refreshToken = cookie.refreshToken;
     const user = await User.findOne({ refreshToken });

     if (!user) throw new Error(" No Refresh token present in db or not matched");

     jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {

          if (err || user.id !== decoded.id) {
               throw new Error("There is something wrong with refresh token");
          };

          const accessToken = generateToken(user?._id);
          res.json({ accessToken });

     });
});

// get a user
const getUser = asyncHandler(async (req, res) => {
     const { id } = req.params;
     validateMongoDbId(id);

     try {

          const findUser = await User.findById(id).populate("cart.product");
          if (!findUser) throw new Error("User not found");

          res.json(findUser);

     } catch (error) {
          throw new Error(error);
     };
});

// get all a user
const getAllUser = asyncHandler(async (req, res) => {
     try {

          const queryObj = { ...req.query };
          const excludeFields = ["page", "sort", "limit", "fields"];

          excludeFields.forEach((el) => delete queryObj[el]);

          let queryStr = JSON.stringify(queryObj);
          queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

          let query = User.find(JSON.parse(queryStr));

          if (req.query.sort) {
               const sortBy = req.query.sort.split(",").join(" ");
               query = query.sort(sortBy);
          } else {
               query = query.sort("-createdAt");
          };

          if (req.query.fields) {
               const fields = req.query.fields.split(",").join(" ");
               query = query.select(fields);
          } else {
               query = query.select("-__v");
          };

          const page = req.query.page;
          const limit = req.query.limit;
          const skip = (page - 1) * limit;

          query = query.skip(skip).limit(limit);

          if (req.query.page) {
               const userCount = await User.countDocuments();
               if (skip >= userCount) throw new Error("this page does not exists");
          };

          const user = await query;
          res.json(user);

     } catch (error) {
          throw new Error(error);
     };
});

// forgot password
const forgotPassword = asyncHandler(async (req, res) => {
     const { email } = req.body;
   
     try {
          const user = await User.findOne({ email });
          if (!user) throw new Error("Користувач не знайдений");
   
          const resetToken = await user.generatePasswordResetToken();

          user.resetPasswordToken = resetToken; 
          user.resetPasswordExpires = Date.now() + 3600000;
   
          await user.save();
   
          const resetLink = `http://localhost:5173/reset-password/${resetToken}`;
          const emailContent = `To reset your password, click the following link: <a href="${resetLink}">Reset Password</a>`;
          const emailOptions = {
               email: user.email,
               subject: 'Password Reset',
               html: emailContent,
          };
   
          await sendEmail(emailOptions);
          res.json({ message: 'Посилання для зміни пароля надіслано на вашу електронну адресу' });

     } catch (error) {
          throw new Error(error);
     };
});

// create checkout
const createCheckoutSession = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          const order = await Order.findOne({ orderby: _id }).populate("products.product");
          if (!order) throw new Error("Order not found");

          const params = {
               version: "3",
               action: "pay",
               amount: order.cartTotal,  
               currency: 'UAH',  
               rro_info: {
                    items: order.products.map(item => ({
                         amount: item.quantity || undefined,
                         price: item.price || undefined,
                         cost: item.priceTotal || undefined,
                         id: parseInt(item._id) || undefined,
                    })),

                    delivery_emails: [user.email, user.email],
               }, 
               description: order.products.map(item => `Quantity: ${item.quantity}, Name Products: ${item.product.title}, Size Product: ${item.size} |`),
               order_id: order._id.toString(),
               result_url: 'http://localhost:5173/',
               server_url: 'http://localhost:5173/',
               language: "uk",
          };

          const form = liqpay.cnb_form(params);
          res.json(form);

     } catch (error) {
          throw new Error(error);
     };
});

// add to cart
const addToCartUser = asyncHandler(async (req, res) => {
     const { cart } = req.body;
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {
          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          for (let i = 0; i < cart.length; i++) {
               const product = await Product.findById(cart[i].product).select('price').exec();
               if (!product) throw new Error(`Product not found ${cart[i].product}`);

               if (product) {
                    const existingCartItemIndex = user.cart.findIndex(item => item.product.toString() === product._id.toString());

                    if (existingCartItemIndex !== -1) {

                         user.cart[existingCartItemIndex].quantity += cart[i].quantity;
                         user.cart[existingCartItemIndex].priceTotal = product.price * user.cart[existingCartItemIndex].quantity;

                    } else {

                         const cartItem = {
                              product: product._id,
                              quantity: cart[i].quantity,
                              size: cart[i].size || "XS",
                              priceTotal: product.price * cart[i].quantity,
                              price: product.price,
                         };

                         user.cart.push(cartItem);
                         
                    };
               };
          };

          user.cartTotal = calculateCartTotal(user.cart);

          await user.save();
          res.json({ cart: user.cart, cartTotal: user.cartTotal });

     } catch (error) {
          throw new Error(error);
     };
});

// coupon code
const applyCode = asyncHandler(async (req, res) => {
     const { couponCode } = req.body;
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          let couponDiscount = 0;

          if (couponCode) {

               const coupon = await Coupon.findOne({ code: couponCode });
               if (!coupon) throw new Error("Coupon not found");

               if (coupon && coupon.expirationDate > new Date() ) {
                    couponDiscount = coupon.discountPercentage
               } else {
                    throw new Error("Invalid coupon code or expired");
               };
          };

          user.cartTotal = calculateCartTotal(user.cart) * (1 - couponDiscount / 100);

          await user.save();

          res.json({ cartTotal: user.cartTotal });

     } catch (error) {
          throw new Error(error);
     };
});

// add to cart update quantity
const addToCartUpdate = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     const { productId, quantity } = req.body;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          const product = await Product.findById(productId).select("price").exec();
          if (!product) throw new Error("Product not found");

          const existingCartItem = user.cart.find(item => item.product.toString() === productId);

          if (existingCartItem) {
               existingCartItem.quantity = quantity;
               existingCartItem.priceTotal = product.price * quantity;
          };

          user.cartTotal = calculateCartTotal(user.cart);

          await user.save();
          res.json({ cart: user.cart, cart: user.cartTotal });

     } catch (error) {
          throw new Error(error);
     };
});

// add to cart update size
const addToCartUpdateSizes = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     const { productId, size } = req.body;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");

          const product = await Product.findById(productId)
          if (!product) throw new Error("Product not found");

          const cartProductSize = user.cart.find(item => item.product.toString() === productId);
          if (!cartProductSize) throw new Error("Product not found in users cart");

          cartProductSize.size = size;

          await user.save();

          res.json({ cart: user.cart });

     } catch (error) {
          throw new Error(error);
     };
});
 
// remove to cart a user
const removeToCartUser = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     const { productId } = req.params;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found!");

          const removeProduct = user.cart.find(item => item.product.toString() === productId);
          if (!removeProduct) throw new Error("Product not found in the user's cart");

          user.cart = user.cart.filter(item => item.product.toString() !== productId);

          user.cartTotal = calculateCartTotal(user.cart);

          await user.save();
          res.json(({ cart: user.cart, cartTotal: user.cartTotal }));

     } catch (error) {
          throw new Error(error);
     };
});

// get cart a user
const getCartUser = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {
          const user = await User.findById(_id).populate("cart.product");

          if (!user) throw new Error("User not found");

          res.json({ cart: user.cart, cartTotal: user.cartTotal });

     } catch (error) {
          throw new Error(error);
     }
});

// create a order
const createOrder = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {

          const user = await User.findById(_id);
          if (!user) throw new Error("User not found");
          if (user.cart.length === 0) throw new Error("Cannot create an order with an empty cart");

          const order = await Order.create({
               products: user.cart.map(item => ({
                    product: item.product,
                    quantity: item.quantity,
                    price: item.price,
                    priceTotal: item.priceTotal,
                    size: item.size,
               })),

               cartTotal: user.cartTotal,
               orderby: _id,
          });

          user.cart = [];
          user.cartTotal = 0;
          
          await user.save();

          res.json({ order });

     } catch (error) {
          throw new Error(error);
     };
});

// get order
const getOrder = asyncHandler(async (req, res) => {
     const { id } = req.params;
     validateMongoDbId(id);
     
     try {

          const findOrder = await Order.findById(id).populate("products.product");
          res.json(findOrder);

     } catch (error) {
          throw new Error(error);
     };
});

// get all order
const getAllOrder = asyncHandler(async (req, res) => {
     try {

          const findAllOrder = await Order.find();
          res.json(findAllOrder);

     } catch (error) {
          throw new Error(error);
     };
});

// delete order
const deleteOrder = asyncHandler(async (req, res) => {
     const { id } = req.params;

     try {
          
          const deleteOrder = await Order.findByIdAndDelete(id);
          res.json(deleteOrder);

     } catch (error) {
          throw new Error(error);
     };
});

const userInfoDelivery = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id);

     try {

          const user = await User.findByIdAndUpdate(_id, { 
               $set: { user_info_delivery: req.body }
          }, { new: true });

          res.json(user.user_info_delivery);

     } catch (error) {
          throw new Error(error);
     };
});

// address add 
const addressUser = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id); 

     try {

          const updateUser = await User.findByIdAndUpdate(_id, {
               deliveryAddress: {
                    country: req?.body?.country,
                    region: req?.body?.region,
                    city: req?.body?.city,
                    zip: req?.body?.zip,
                    street: req?.body?.street,
               },
          }, { new: true });

          res.json({
               _id: updateUser?._id,
               firstname: updateUser?.firstname,
               lastname: updateUser?.lastname,
               parentname: updateUser?.parentname,
               email: updateUser?.email,
               deliveryAddress: updateUser?.deliveryAddress,
               role: updateUser?.role,
               expired: updateUser?.expires,
               confirmed: updateUser?.confirmed,
               token: generateToken(updateUser?._id),
          })

     } catch (error) {
          throw new Error(error);
     };
});

// reset password
const resetPassword = asyncHandler(async (req, res) => {
     const { token } = req.params;
     const { password, repeatPassword } = req.body;

     const user = await User.findOne({
          resetPasswordToken: token,
          resetPasswordExpires: { $gt: Date.now() },
     });

     if (!user) throw new Error("Зробіть новий запит на скидання паролю.");

     if (password !== repeatPassword) {
          throw new Error("Паролі не співпадають.");
     };

     user.password = password;
     user.resetPasswordToken = undefined;
     user.resetPasswordExpires = undefined;
   
     const updatePassword = await user.save();
     res.json(updatePassword);
});

// update a password
const updatePassword = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     const { password, repeatPassword } = req.body;
     validateMongoDbId(_id);

     if (password !== repeatPassword) throw new Error("Passwords do not match" )

     try {
          const user = await User.findById(_id);

          if (!user) throw new Error("User not found");

          if (password) {
               user.password = password;

               const updatedUser = await user.save();
               res.json(updatedUser);

          } else {
               res.json(user);
          };

     } catch (error) {
          throw new Error("Password update failed");
     };
});

// update a user
const updateUser = asyncHandler(async (req, res) => {
     const { _id } = req.user;
     validateMongoDbId(_id);
     
     try {

          const updateUser = await User.findByIdAndUpdate(_id, {
               firstname: req?.body?.firstname,
               lastname: req?.body?.lastname,
               parentname: req?.body?.parentname,
          }, { new: true });

          res.json({
               _id: updateUser?._id,
               firstname: updateUser?.firstname,
               lastname: updateUser?.lastname,
               parentname: updateUser?.parentname,
               email: updateUser?.email,
               deliveryAddress: updateUser?.deliveryAddress,
               role: updateUser?.role,
               expired: updateUser?.expires,
               confirmed: updateUser?.confirmed,
               token: generateToken(updateUser?._id),
          });м

     } catch (error) {
          throw new Error(error);
     };
});

// block a user
const blockUser = asyncHandler(async (req, res) => {
     const { id } = req.params;
     validateMongoDbId(id);

     try {

          const block = await User.findByIdAndUpdate(id, {
               isBlocked: true,
          }, { new: true });

          res.json(block);
          
     } catch (error) {
          throw new Error(error);
     };
});

// unBlock a user
const unBlockUser = asyncHandler(async (req, res) => {
     const { id } = req.params;
     validateMongoDbId(id);

     try {

          const unBlock = await User.findByIdAndUpdate(id, {
               isBlocked: false,
          }, { new: true });

          res.json(unBlock);
          
     } catch (error) {
          throw new Error(error);
     };
});

// delete a user
const deleteUser = asyncHandler(async (req, res) => {
     const { id } = req.params;
     validateMongoDbId(id);

     try {

          const deleteUser = await User.findByIdAndDelete(id);
          res.json(deleteUser);

     } catch (error) {
          throw new Error(error);
     };
});

const calculateCartTotal = (cart) => {
     if (!cart || !cart.length) {
          return 0;
     };

     let cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

     return cartTotal;
};

module.exports = { 
     createUser,
     loginUser, 
     addToCartUpdate, 
     addToCartUpdateSizes,
     addToCartUser, 
     getCartUser, 
     removeToCartUser,  
     addressUser, 
     applyCode,
     getAddressUser, 
     activateUser, 
     updateUser, 
     refreshTokenUser, 
     logoutUser, 
     getUser, 
     getAllUser, 
     resetPassword, 
     userInfoDelivery,
     addressUser, 
     createUserFirebase,
     createOrder,
     forgotPassword,
     updatePassword,
     blockUser, 
     unBlockUser,
     deleteOrder,
     deleteUser,
     createCheckoutSession,
     getOrder,
     getAllOrder,
};