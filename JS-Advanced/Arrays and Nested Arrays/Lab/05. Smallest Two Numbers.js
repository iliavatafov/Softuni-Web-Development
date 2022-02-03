function solve(input) {

    let sortedInput = input.sort((a, b) => a - b);
    let result = [sortedInput[0], sortedInput[1]];
    console.log(result.join(` `));
}

solve([3, 0, 10, 4, 7, 3])