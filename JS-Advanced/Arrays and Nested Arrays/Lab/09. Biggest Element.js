function solve(input) {

    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let currentArr of input) {
        for (let number of currentArr) {
            if (number > maxNum) {
                maxNum = number;
            }
        }
    }

    return maxNum;
}