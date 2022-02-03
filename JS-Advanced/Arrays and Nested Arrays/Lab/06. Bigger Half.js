function solve(input) {
    let half = Math.floor(input.length / 2);
    let sortedInput = input.sort((a, b) => a - b);
    let result = sortedInput.slice(half);
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]);