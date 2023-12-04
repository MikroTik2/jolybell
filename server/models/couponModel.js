const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
let couponSchema = new mongoose.Schema({
     code: {
          type: String,
          required: true,
          unique: true,
     },
     discountPercentage: {
          type: Number,
          required: true,
     },
     expirationDate: {
          type: Date,
          required: true,
     },
});

//Export the model
module.exports = mongoose.model('Coupon', couponSchema);