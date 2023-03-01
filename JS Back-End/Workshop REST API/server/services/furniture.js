const Item = require("../models/Item");

async function getAll() {
  return Item.find({});
}

function getById(id) {
  return Item.findById(id);
}

async function create(item) {
  const result = new Item(item);

  await result.save();

  console.log(result);

  return result;
}

async function update(id, item) {
  const existing = await Item.findById(id);

  existing.make = item.make;
  existing.model = item.model;
  existing.model = item.model;
  existing.description = item.description;
  existing.price = item.price;
  existing.img = item.img;
  existing.material = item.material;

  await existing.save();

  return existing;
}

async function deleteById(id) {
  await Item.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};
