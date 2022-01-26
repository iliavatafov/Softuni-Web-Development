function evenAndOdd(array) {

    let sumEven = 0;
    let sumOdd = 0;
    let currentNum = 0;

    for (let i of array) {
        currentNum = Number(i);
        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }
    let result = sumEven - sumOdd;
    console.log(result)
}