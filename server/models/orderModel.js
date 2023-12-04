const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
let orderSchema = new mongoose.Schema({
     orderNumber: {
          type: Number,
          unique: true,
          maxlength: 5,
     },
     products: [{

          product: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Product",
          },

          price: Number,
          priceTotal: Number,
          quantity: Number,
          size: String,
     }],

     cartTotal: {
          type: Number,
          required: true,
     },

     orderStatus: {
          type: String,
          default: "Not Processed",
          enum: [
               "Not Processed",
               "Cash on Delivery",
               "Processing",
               "Dispatched",
               "Cancelled",
               "Delivered",
          ],
     },

     orderby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
     },
}, { timestamps: true });

orderSchema.pre("save", async function (next) {
     if (!this.orderNumber) {
          const randomNum = Math.floor(10000 + Math.random() * 90000);
          this.orderNumber = randomNum.toString().substring(0, 5);
     };

     next();
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);