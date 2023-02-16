const mongoose = require("mongoose");

const Post = require("./models/Post");
const Comment = require("./models/Comment");

// const Car = require("./models/Car");

const connectionString = "mongodb://127.0.0.1:27017/testdb";

async function start() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(connectionString);

  console.log("Connected ...");

  const post = await Post.findOne({}).populate("comments");
  console.log(post);

  // await Comment.create({
  //   author: "Ilia",
  //   content: "Ilia is the best",
  // });

  // const comment = await Comment.findOne({});
  // const post = await Post.findOne({});

  // post.comments.push(comment);

  // await post.save();

  // const car = new Car({
  //   name: "Toyota Corola",
  //   price: -100,
  // });

  // await car.save();

  // const data = await Car.find({ price: { $gt: 25000, $lt: 30001 } });
  // console.log(data);

  // data.forEach((car) => car.startEngine());
  // data.forEach((car) => console.log(car.VAT));

  // console.log(await Car.find({}).sort({ price: -1 }));
}

start();
