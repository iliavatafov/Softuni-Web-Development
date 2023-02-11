const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Reques");

    if (req.method == "GET") {
      // fs.readFile("./index.html", (err, data) => {
      //   res.write(data.toString());
      //   res.end();
      // });

      // const fileStreem = fs.createReadStream("./index.html");

      // fileStreem.on("data", (chunk) => {
      //   res.write(chunk);
      // });
      // fileStreem.on("end", () => {
      //   res.end();
      // });

      fs.createReadStream("./index.html").pipe(res);
    } else if (req.method == "POST") {
      let body = "";
      req.on("data", (data) => {
        console.log(`Chunck >>> ${data}`);
        body += data;
      });
      req.on("end", () => {
        const bodyAsObject = JSON.parse(body);
        console.log(`Body: ${JSON.parse(body)}`);

        bodyAsObject.price++;
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.write(JSON.stringify(bodyAsObject));
        res.end();
      });
    }
  })
  .listen(3000);

console.log("Server is listen on port 3000...");
