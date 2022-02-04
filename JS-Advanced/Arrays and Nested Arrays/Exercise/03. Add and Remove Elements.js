function solve(input) {
    let inputLength = input.length;

    let result = [];

    for (let i = 1; i <= inputLength; i++) {
        let currentElement = input.shift();
        if (currentElement === `add`) {
            result.push(i);
        } else {
            result.pop();
        }
    }

    if (result.length) {
        console.log(result.join(`\n`));
    } else {
        console.log(`Empty`);
    }

}