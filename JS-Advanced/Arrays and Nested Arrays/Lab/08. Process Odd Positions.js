function solve(input) {
    result = [];
    for (let i = 1; i < input.length; i += 2) {
        result.push(input[i] * 2);
    }
    return result.reverse();
}