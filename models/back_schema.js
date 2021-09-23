const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const backSchema = mongoose.Schema(
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

backSchema.plugin(AutoIncrement, { inc_field: "back_id" });
module.exports = mongoose.model("backs", backSchema);
