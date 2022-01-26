function sumEvenNumbers(array) {

    let sum = 0;

    for (let i of array) {
        let currentNum = Number(i);
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }
    console.log(sum)
}

