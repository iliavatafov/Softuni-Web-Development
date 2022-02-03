function solve(currentSpeed, area) {

    let listOfSpeedLinits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let speedLimit = listOfSpeedLinits[area];

    if (currentSpeed <= speedLimit) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    } else {
        speedOverTheLimit = currentSpeed - speedLimit;
        let status = aboveSpeedLimit(speedOverTheLimit, currentSpeed, speedLimit);
        console.log(`The speed is ${speedOverTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }

    function aboveSpeedLimit(speedOverTheLimit, currentSpeed, speedLimit) {
        let status = ``;
        if (speedOverTheLimit < 21) {
            status = `speeding`;
        } else if (speedOverTheLimit < 41) {
            status = `excessive speeding`;
        } else {
            status = `reckless driving`;
        }
        return status;
    }

}

solve(200, 'motorway')