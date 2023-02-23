const { isUser } = require("../middleware/guards");
const { createPost } = require("../services/post");
const { postViewModel, mapErrors } = require("../util/mappers");

const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Page" });
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const post = postViewModel({ ...req.body, creator: userId });

  try {
    await createPost(post);
    res.redirect("/catalog");
  } catch (error) {
    const errors = mapErrors(error);
    res.render("create", {
      data: {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
      },
      errors,
    });
  }
  res.render("create", { title: "Create Page" });
});

module.exports = router;
