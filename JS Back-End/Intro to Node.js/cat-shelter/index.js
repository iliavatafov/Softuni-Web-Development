const http = require("http");

const cats = require("./catsDatabase.json");

const homePage = require("./views/home");
const editPage = require("./views/edit");

const sticeCss = require("./styles/site.");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  if (req.url === "/") {
    res.write(homePage);
  } else if (req.url === "/styles/site.css") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    res.write(sticeCss);
  } else if (req.url.includes("edit")) {
    const catId = req.url.split("/").pop();
    const currentCat = cats.find((c) => c.catId == catId);
    res.write(editPage(currentCat));
  } else {
    res.write(`
    <h1>404</h1>
    `);
  }

  res.end();
});

server.listen(5000);
console.log("Server is running on port 5000...");
