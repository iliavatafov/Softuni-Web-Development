function solve(n1, n2, n3) {
    let arr = [n1, n2, n3];
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let el of arr) {
        if (el > maxNum) {
            maxNum = el;
        }
    }
    console.log(`The largest number is ${maxNum}`);
}