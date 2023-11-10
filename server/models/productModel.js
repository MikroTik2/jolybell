const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true,
     },
     slug: {
          type: String,
          required: true,
     },
     description: {
          type: [String],
          required: true,
     },
     price: {
          type: Number,
          required: true,
     },
     category: {
          type: String,
          required: true,
     },
     color: {
          type: String,
          required: true,
     },
     careInstructions: {
          type: String,
          required: true,
     },
     careInstructionsImage: {
          type: String,
          required: false,
     },
     images: {
          type: [String],
          required: true
     },
     sizesText: { 
          type: [String],
          required: true,
     },
     sizes: {
          XS: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          S: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          M: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          L: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          XL: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          XXL: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
          XXXL: {
               A: { type: Number, required: false },
               B: { type: Number, required: false },
               C: { type: Number, required: false },
          },
     },
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Product', productSchema);