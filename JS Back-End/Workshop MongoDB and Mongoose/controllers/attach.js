module.exports = {
  async get(req, res) {
    const id = req.params.id;

    try {
      const [car, accessories] = await Promise.all([
        req.storage.getById(id),
        req.accessory.getAll(),
      ]);

      const existingIds = car.accessories.map((a) => a.id.toString());
      const availableAccessories = accessories.filter(
        (a) => existingIds.includes(a.id.toString()) == false
      );

      res.render("attach", {
        title: "Attach accessory",
        car,
        accessories: availableAccessories,
      });
    } catch (error) {
      res.redirect("404");
    }
  },
  async post(req, res) {
    const carId = req.params.id;
    const accessoryId = req.body.accessory;

    try {
      await req.storage.attachAccessory(carId, accessoryId);
      res.redirect("/");
    } catch (error) {
      console.log("Error attach reccord");
      res.redirect("/attach/" + carId);
    }
  },
};
