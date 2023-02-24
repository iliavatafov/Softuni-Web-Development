const { isUser } = require("../middleware/guards");
const { getPostById, updatePost, deletePostById } = require("../services/post");
const { postViewModel } = require("../util/mappers");

const router = require("express").Router();

router.get("/details/:id", async (req, res) => {
  try {
    const post = postViewModel(await getPostById(req.params.id));

    let hasCreator = false;
    let isUserInTheList = false;
    const hasAvailableSeats = post.seats > 0;

    if (req.session.user) {
      hasCreator = req.session.user._id == post.creator._id;
      isUserInTheList = post.buddies.includes(req.session.user._id);
    }

    const data = {
      ...post,
      hasCreator,
      isUserInTheList,
      hasAvailableSeats,
    };

    res.render("details", {
      title: "Details Page",
      data,
    });
  } catch (error) {
    res.status(404);
    res.render("404");
  }
});

router.get("/join/:id", isUser(), async (req, res) => {
  try {
    let post = postViewModel(await getPostById(req.params.id));

    if (post.seats > 0) {
      post.seats -= 1;
      post.buddies.push(req.session.user._id);
      await updatePost(req.params.id, post);

      let hasCreator = false;
      let isUserInTheList = false;
      const hasAvailableSeats = post.seats > 0;

      if (req.session.user) {
        hasCreator = req.session.user._id == post.creator._id;
        isUserInTheList = post.buddies.includes(req.session.user._id);
      }

      res.render("details", {
        title: "Details Page",
        data: {
          ...post,
          hasCreator,
          isUserInTheList,
          hasAvailableSeats,
        },
      });
    }
  } catch (error) {
    res.status(404);
    res.render("404");
  }
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await deletePostById(id);
    res.redirect("/catalog");
  } catch (error) {
    res.status(404);
    res.render("404");
  }
});

module.exports = router;
