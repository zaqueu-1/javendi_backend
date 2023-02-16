const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true },
    userFullName: { type: String, required: false },
    userEmail: { type: String, required: true },
    userPass: { type: String, required: true },
    userPic: { type: String, required: false },
    userRating: { type: String, required: false },
    userBirth: { type: Date, required: false },
    userPhone: { type: Number, required: false },
    userAddress: { type: String, required: false },
    userCity: { type: String, required: false },
}, 
  { timestamps: true }
);

userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('userPass')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.userPass, salt);
    user.userPass = hash;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);
module.exports = { User, userSchema };