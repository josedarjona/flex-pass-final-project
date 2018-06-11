const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  dob: String,
  address: String,
  email: String,
  phone: String,
  membership: {type: String, enum: ['flex1', 'flex2', 'flex3']},
  flexId: String,
  username: String,
  password: String,
}, {
  usePushEach: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;