const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const frontSchema = mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    date: Date,
    truckno: Number,
    itemcode: String,
    qty: Number,
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

frontSchema.plugin(AutoIncrement, { inc_field: "front_id" });
module.exports = mongoose.model("fronts", frontSchema);
