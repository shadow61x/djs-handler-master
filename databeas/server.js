const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  serverID: {
    type: String,
    required: true,
    unique: true
  },
  ownerID: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("server", serverSchema);
