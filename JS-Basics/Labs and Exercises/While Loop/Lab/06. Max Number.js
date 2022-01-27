function maxNumber(input) {

    let index = 0;

    let currentNum = input[index];
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (currentNum !== "Stop") {
        let current = Number(currentNum);
        if (current > maxNum) {
            maxNum = current;
        }
        currentNum = input[index];
        index++
    }
    console.log(maxNum);
}

