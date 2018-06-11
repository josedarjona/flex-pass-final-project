const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const gymSchema = new Schema({
  gym: String,
  gymList: Array,
  userID: Schema.Types.ObjectId
}, {
  usePushEach: true
});

const Gym = mongoose.model("Gym", gymSchema);

module.exports = Gym;