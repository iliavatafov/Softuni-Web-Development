const fs = require("fs");

// const file = fs.readFileSync("./file.txt");

// console.log(file.toString());

// async function start() {
//   const data = await fs.readFile("./file.txt");
//   console.log(data.toString());
// }

// start();

// const list = fs.readdirSync("./");
// console.log(list);

// fs.writeFileSync("./output.txt", "Hello again!");

fs.readFile("./data.json", (err, dataAsText) => {
  const data = JSON.parse(dataAsText);

  data.price++;

  console.log(data);

  fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
    console.log("write complete");
  });
});
