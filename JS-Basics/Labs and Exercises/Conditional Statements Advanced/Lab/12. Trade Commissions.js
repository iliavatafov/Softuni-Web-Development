function commision(input) {

    let city = input[0];
    let salesVolume = Number(input[1]);

    let salesCommisionPracentage = 0;
    let salesCommision = 0;

    switch (city) {
        case "Sofia":
            if (salesVolume >= 0 && salesVolume <= 500) {
                salesCommisionPracentage = 0.05;
            }
            else if (salesVolume > 500 && salesVolume <= 1000) {
                salesCommisionPracentage = 0.07;
            }
            else if (salesVolume > 1000 && salesVolume <= 10000) {
                salesCommisionPracentage = 0.08;
            }
            else {
                salesCommisionPracentage = 0.12;
            }
            salesCommision = salesVolume * salesCommisionPracentage;
            if (salesCommision >= 0) {
                console.log(salesCommision.toFixed(2))
            }
            else {
                console.log("error")
            }
            break;
        case "Varna":
            if (salesVolume >= 0 && salesVolume <= 500) {
                salesCommisionPracentage = 0.045;
            }
            else if (salesVolume > 500 && salesVolume <= 1000) {
                salesCommisionPracentage = 0.075;
            }
            else if (salesVolume > 1000 && salesVolume <= 10000) {
                salesCommisionPracentage = 0.10;
            }
            else {
                salesCommisionPracentage = 0.13;
            }
            salesCommision = salesVolume * salesCommisionPracentage;
            if (salesCommision >= 0) {
                console.log(salesCommision.toFixed(2))
            }
            else {
                console.log("error")
            }
            break;
        case "Plovdiv":
            if (salesVolume >= 0 && salesVolume <= 500) {
                salesCommisionPracentage = 0.055;
            }
            else if (salesVolume > 500 && salesVolume <= 1000) {
                salesCommisionPracentage = 0.08;
            }
            else if (salesVolume > 1000 && salesVolume <= 10000) {
                salesCommisionPracentage = 0.12;
            }
            else {
                salesCommisionPracentage = 0.145;
            }
            salesCommision = salesVolume * salesCommisionPracentage;
            if (salesCommision >= 0) {
                console.log(salesCommision.toFixed(2))
            }
            else {
                console.log("error")
            }
            break;
        default:
            console.log("error");
            break;
    }

}