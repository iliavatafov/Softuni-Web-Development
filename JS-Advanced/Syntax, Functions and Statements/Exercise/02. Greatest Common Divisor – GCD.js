function solve(n1, n2) {
    let higherValue = 0;
    if (n1 >= n2) {
        higherValue = n1;
    } else {
        higherValue = n2;
    }
    let GCD = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= higherValue; i++) {
        let resultOne = n1 % i;
        let resultTwo = n2 % i;
        if (resultOne === 0 && resultTwo === 0 && GCD < i) {
            GCD = i;
        }
    }
    console.log(GCD);
}