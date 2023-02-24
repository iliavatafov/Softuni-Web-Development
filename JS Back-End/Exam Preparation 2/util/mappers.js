function mapErrors(err) {
  if (Array.isArray(err)) {
    return err;
  } else if (err.name == "ValidationError") {
    return Object.values(err.errors).map((e) => ({ msg: e.message }));
  } else if (typeof err.message == "string") {
    return [{ msg: err.message }];
  } else {
    return [{ msg: "Request error" }];
  }
}

function postViewModel(post, create) {
  return {
    _id: post._id,
    startPoint: post.startPoint,
    endPoint: post.endPoint,
    date: post.date,
    time: post.time,
    carImage: post.carImage,
    carBrand: post.carBrand,
    seats: post.seats,
    price: post.price,
    description: post.description,
    creator: create ? post.creator : mapCreator(post.creator),
    buddies: post.buddies,
  };
}

function mapCreator(creator) {
  return {
    _id: creator._id,
    email: creator.email,
  };
}

module.exports = {
  mapErrors,
  postViewModel,
};
