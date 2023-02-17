const fs = require("fs/promises");
const Car = require("../models/Car");
const { carViewModel } = require("./util");

async function getAll(query) {
  const options = {};

  if (query.search) {
    options.name = new RegExp(query.search, "i");
  }

  if (query.from) {
    options.price = { $gte: Number(query.from) };
  }

  if (query.to) {
    if (!options.price) {
      options.price = {};
    }
    options.price.$lte = Number(query.to);
  }

  const cars = await Car.find(options);

  return cars.map((car) => carViewModel(car));
}

async function getById(id) {
  const car = await Car.findById(id).populate("accessories");

  if (car) {
    return carViewModel(car);
  } else {
    return undefined;
  }
}

async function createCar(car) {
  await Car.create(car);
}

async function updateById(id, car) {
  const existing = await Car.findById(id);

  existing.name = car.name;
  existing.description = car.description;
  existing.imageUrl = car.imageUrl || undefined;
  existing.price = car.price;
  existing.accessories = car.accessories;
  await existing.save();
}

async function attachAccessory(carId, accessooryId) {
  const existing = await Car.findById(carId);

  existing.accessories.push(accessooryId);

  await existing.save();
}

async function deleteById(id) {
  await Car.findByIdAndDelete(id);
}

module.exports = () => (req, res, next) => {
  req.storage = {
    getAll,
    getById,
    createCar,
    deleteById,
    updateById,
    attachAccessory,
  };
  next();
};
