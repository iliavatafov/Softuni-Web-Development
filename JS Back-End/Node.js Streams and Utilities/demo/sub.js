const observer = require("./observer");

function subscibe() {
  observer.on("alert", (data) => {
    console.log("Inside second subscirber");
    console.log(data);
  });
}

subscibe();
