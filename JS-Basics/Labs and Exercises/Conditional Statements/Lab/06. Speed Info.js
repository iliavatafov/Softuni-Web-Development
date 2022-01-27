function speed(input) {

    let currentSpeed = Number(input[0]);

    if (currentSpeed <= 10) {
        console.log("slow");
    }
    else if (currentSpeed > 1000) {
        console.log("extreamly fast");
    }
    else if (currentSpeed > 150 && currentSpeed <= 1000) {
        console.log("ultra fast");
    }
    else if (currentSpeed > 50 && currentSpeed <= 150) {
        console.log("fast");
    }
    else if (currentSpeed > 10 && currentSpeed <= 50) {
        console.log("average");
    }
    else {
        console.log("slow");
    }
}