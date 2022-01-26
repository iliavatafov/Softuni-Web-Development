function signCheck(numOne, numTwo, numThree) {

    if ((numOne > 0 && numTwo > 0) || (numOne < 0 && numTwo < 0)) {
        if (numThree > 0) {
            console.log(`Positive`);
        } else {
            console.log(`Negative`);
        }
    } else {
        if (numThree > 0) {
            console.log(`Negative`);
        } else {
            console.log(`Positive`);
        }
    }
}