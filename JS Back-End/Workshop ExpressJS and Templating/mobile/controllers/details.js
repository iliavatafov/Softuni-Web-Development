module.exports = {
  async details(req, res) {
    const car = await req.storage.getById(req.params.id);

    if (car) {
      res.render("details", { car, title: `Carbicle ${car.name}` });
    } else {
      res.redirect("/404");
    }
  },
};
