function solve(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = result.length - k;
        let endIndex = i;
        if (startIndex < 0) {
            let slicedNumbers = result.slice(0, endIndex);
            result.push(slicedNumbers.reduce((a, b) => a + b));
        } else {
            let slicedNumbers = result.slice(startIndex, endIndex);
            result.push(slicedNumbers.reduce((a, b) => a + b));
        }
    }

    return result;
}