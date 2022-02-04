function solve(input) {
    let sortedNums = input.sort((a, b) => a - b);

    let firstElement = sortedNums.shift();
    let lastElement = sortedNums.pop();

    let result = [];

    while (firstElement && lastElement) {

        result.push(firstElement);
        result.push(lastElement);

        firstElement = sortedNums.shift();
        lastElement = sortedNums.pop();

        if (!firstElement) {
            result.push(lastElement);
        } else if (!lastElement) {
            result.push(firstElement);
        }
    }

    return result;
}