const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  creted_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  if (thi.isNew || thi.isModified("password")) {
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
      if (err) next(err);
      else {
        this.password = hashedPassword;
        next();
      }
    });
  }
});

userSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) callback(err);
    else callback(err, same);
  });
};

module.exports = mongoose.model("User", userSchema);
