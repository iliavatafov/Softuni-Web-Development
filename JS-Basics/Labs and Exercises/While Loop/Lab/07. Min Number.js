function minNumber(input) {

    let index = 0;

    let currentNum = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;

    let current = 0;

    while (currentNum !== "Stop") {

        current = Number(currentNum);
        if (current < minNum) {
            minNum = current;
        }
        currentNum = input[index];
        index++;
    }
    console.log(current);
}
