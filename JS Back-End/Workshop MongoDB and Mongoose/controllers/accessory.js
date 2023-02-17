module.exports = {
  get(req, res) {
    res.render("createAccessory", { title: "Create Accessory" });
  },
  async post(req, res) {
    const accessory = {
      name: req.body.name,
      description: req.body.description,
      imagaUrl: req.body.imagaUrl || undefined,
      price: Number(req.body.price),
    };

    console.log(accessory);

    try {
      await req.accessory.createAccessory(accessory);
      res.redirect("/");
    } catch (error) {
      console.log("Error create accessory");
      console.log(error.message);
      res.redirect("/accessory");
    }
  },
};
