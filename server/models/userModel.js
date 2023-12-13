const mongoose = require('mongoose'); 
const bcrypt = require("bcrypt");
const crypto = require("crypto");

let userSchema = new mongoose.Schema({
     displayName: {
          type: String,
          required: false,
     },
     firstname: {
          type: String,
          required: false,
          default: "",
     },
     lastname: {
          type: String,
          required: false,
          default: "",
     },
     parentname: {
          type: String,
          required: false,
          default: "",
     },
     mobile: {
          type: String,
          required: false,
     },
     email: {
          type:String,
          required:true,
          unique:true,
     },
     password: {
          type:String,
          required:false,
     },
     isBlocked: {
          type: Boolean,
          default: false,
     },
     role: {
          type: String,
          enum: [ "user", "admin", "superadmin", "guest" ],
          default: "user",
     },
     confirmed: {
          type: Boolean,
          default: false
     },
     expires: {
          type: Number,
          default: Date.now()
     },

     cart: [{
          product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          quantity: { type: Number, default: 1 },
          price: { type: Number },
          priceTotal: { type: Number  },
          size: { type: String, default: "XS" },
     }],

     cartTotal: {
          type: Number,
          default: 0,
     },

     refreshToken: { type: String },
     accessToken: { type: String },
     confirmationToken: String,

     resetPasswordToken: String,
     resetPasswordExpires: Date,

     user_info_delivery: {
          first_name: {
               type: String,
               default: "",
          },
          last_name: {
               type: String,
               default: "",
          },
          middle_name: {
               type: String,
               default: "",
          },
          mobile: {
               type: String,
               default: "",
          },
          email: {
               type: String,
               default: "",
          },
          city: {
               type: String,
               default: "",
          },
          region: {
               type: String,
               default: "",
          },
          address: {
               type: String,
               default: "",
          },
          zip_code: {
               type: String,
               default: "",
          },
          note: {
               type: String,
               default: "",
          },
     },

     deliveryAddress: {
          country: {
               type: String,
               default: "",
          },
          region: {
               type: String,
               default: "",
          },
          city: {
               type: String,
               default: "",
          },
          zip: {
               type: String,
               default: "",
          },
          street: {
               type: String,
               default: "",
          },
     },

}, { timestamps: true });

userSchema.pre("save", async function (next) {

     if (!this.isModified("password")) {
          return next();
     };

     const salt = await bcrypt.genSaltSync(10);
     this.password = await bcrypt.hash(this.password, salt);

     if (!this.confirmationToken) {
          this.confirmationToken = crypto.randomBytes(20).toString("hex");
     };

});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
     return bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generatePasswordResetToken = async function () {

     const resetToken = crypto.randomBytes(20).toString("hex");
     this.resetPasswordToken = resetToken;
     this.resetPasswordExpires = Date.now() + 3600000;

     return resetToken;

};

//Export the model
module.exports = mongoose.model('User', userSchema);