function solve(arr, order) {
    return arr.sort((a, b) => order === `desc` ? b - a : a - b);
}