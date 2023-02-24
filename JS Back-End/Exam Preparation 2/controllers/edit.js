const { isUser } = require("../middleware/guards");
const { getPostById } = require("../services/post");
const { postViewModel } = require("../util/mappers");

const router = require("express").Router();

router.get("/edit/:id", isUser(), async (req, res) => {
  try {
    const posts = postViewModel(await getPostById(req.params.id));
    res.render("edit", { title: "Edit Page", data: posts });
  } catch (error) {
    console.log(error);
    res.status(404);
    res.render("404");
  }
});

// router.post("/create", isUser(), async (req, res) => {
//   const userId = req.session.user._id;
//   const post = postViewModel({ ...req.body, creator: userId }, (create = true));

//   try {
//     await createPost(post);
//     res.redirect("/catalog");
//   } catch (error) {
//     console.log(error);
//     const errors = mapErrors(error);
//     res.render("create", {
//       data: {
//         startPoint: req.body.startPoint,
//         endPoint: req.body.endPoint,
//         date: req.body.date,
//         time: req.body.time,
//         carImage: req.body.carImage,
//         carBrand: req.body.carBrand,
//         seats: req.body.seats,
//         price: req.body.price,
//         description: req.body.description,
//       },
//       errors,
//     });
//   }
//   res.render("create", { title: "Create Page" });
// });

module.exports = router;
