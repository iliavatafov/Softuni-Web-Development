function sequance2k(input) {

    let number = Number(input[0]);

    let currentNum = 1;

    while (number >= currentNum) {
        console.log(currentNum);
        currentNum = currentNum * 2 + 1;
    }
}