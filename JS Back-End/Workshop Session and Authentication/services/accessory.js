const Accessory = require("../models/Accessory");
const { accessoryViewModel } = require("./util");

async function getAll() {
  const data = await Accessory.find({});

  return data.map(accessoryViewModel);
}

async function createAccessory(accessory) {
  console.log(accessory);
  await Accessory.create(accessory);
}

module.exports = () => (req, res, next) => {
  req.accessory = {
    createAccessory,
    getAll,
  };
  next();
};
