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

function postViewModel(post) {
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
    creator: post.creator,
    description: post.description,
  };
}

module.exports = {
  mapErrors,
  postViewModel,
};
