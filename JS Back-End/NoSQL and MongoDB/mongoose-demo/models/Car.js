const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  name: { type: String, required: true },
  price: {
    type: Number,
    default: 0,
    min: [0, "Price cannot be negative. Attempted to set price {VALUE}"],
  },
});

carSchema.methods.startEngine = function () {
  console.log("Vroom!");
};

carSchema.virtual("VAT").get(function () {
  return this.price * 0.2;
});

const Car = model("Car", carSchema);

module.exports = Car;
