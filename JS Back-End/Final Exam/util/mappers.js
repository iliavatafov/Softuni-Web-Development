function mapErrors(err) {
  if (Array.isArray(err)) {
    return err;
  } else if (err.name == "ValidationError") {
    console.log("here");
    return Object.values(err.errors).map((e) => ({ msg: e.message }));
  } else if (typeof err.message == "string") {
    return [{ msg: err.message }];
  } else {
    return [{ msg: "Request error" }];
  }
}

function postViewModel(post) {
  return {
    _id: post._id,
    name: post.name,
    image: post.image,
    age: post.age,
    description: post.description,
    location: post.location,
    commentList: post.commentList,
    owner: ownerViewModel(post.owner),
  };
}

function ownerViewModel(user) {
  return {
    _id: user._id,
    username: user.username,
  };
}

module.exports = {
  mapErrors,
  postViewModel,
};
