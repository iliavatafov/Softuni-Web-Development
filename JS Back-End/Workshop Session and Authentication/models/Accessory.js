const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const accessorySchema = new Schema({
  name: { type: String, default: "", required: true },
  description: { type: String, default: "" },
  imageUrl: { type: String, default: "noImage.jpg" },
  price: { type: Number, default: 0 },
  owenr: { type: ObjectId, ref: "User" },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
