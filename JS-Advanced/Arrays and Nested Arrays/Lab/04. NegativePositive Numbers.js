function solve(input) {

    let result = [];

    input.forEach(x => {
        if (x < 0) {
            result.unshift(x);
        } else {
            result.push(x);
        }
    });

    console.log(result.join(`\n`));
}