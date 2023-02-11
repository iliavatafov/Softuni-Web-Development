const observer = require("./observer");

function subscibe() {
  observer.on("alert", (data) => {
    console.log("Event received");
    console.log(data);
  });
}

subscibe();
