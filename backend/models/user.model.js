import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import "dotenv/config"

const emailRegexPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema= new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      validate: {
        validator: function (value) {
          return emailRegexPattern.test(value);
        },
        message: "please enter a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    phone:{
      type:String,
    },
    
  },
  
  { timestamps: true }
);

// Hashing  Password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});



const userModel = mongoose.model("User", userSchema);

export default userModel;