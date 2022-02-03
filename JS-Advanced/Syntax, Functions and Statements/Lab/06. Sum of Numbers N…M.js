function solve(n1, n2) {
    let result = 0;
    for (let i = Number(n1); i <= Number(n2); i++) {
        result += i;
    }
    return result;
}