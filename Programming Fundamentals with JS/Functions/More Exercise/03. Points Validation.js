function pointsValidation(arr) {

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    if (checkOne(x1, y1) === true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (checkTwo(x2, y2) === true) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if (checkThree(x1, y1, x2, y2) === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function checkOne(x1, y1) {
        let checkOne = Math.sqrt(Math.pow(Math.abs(x1 - 0), 2) + Math.pow(Math.abs(y1 - 0), 2));
        if (Number.isInteger(checkOne)) {
            return true;
        } else {
            return false;
        }
    }

    function checkTwo(x2, y2) {
        let checkTwo = Math.sqrt(Math.pow(Math.abs(x2 - 0), 2) + Math.pow(Math.abs(y2 - 0), 2));
        if (Number.isInteger(checkTwo)) {
            return true;
        } else {
            return false;
        }
    }

    function checkThree(x1, y1, x2, y2) {
        let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        if (Number.isInteger(checkThree)) {
            return true;
        } else {
            return false;
        }
    }
}

