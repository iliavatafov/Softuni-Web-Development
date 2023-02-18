module.exports = {
  async details(req, res) {
    const car = await req.storage.getById(req.params.id);

    if (req.session.user && req.session.user.id == car.owner) {
      car.isOwner = true;
    }

    if (car) {
      res.render("details", { car, title: `Carbicle ${car.name}` });
    } else {
      res.redirect("/404");
    }
  },
};
