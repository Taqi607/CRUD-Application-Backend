const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    // enum: ["male", "female"],
  },
  phoneNr: {
    type: Number,
    required: true,
  },
});

module.exports = mongooose.model("users", userSchema);
