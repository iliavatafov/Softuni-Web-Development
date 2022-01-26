function solve(arr) {
    let firstPart = arr[0];
    let lastPart = arr[1];
    let replacement = arr[2].toUpperCase().split(``);

    let rawPassword = firstPart.concat(lastPart).split(``);
    let indexReplacement = 0;
    for (let i = 0; i < rawPassword.length; i++) {
        if (rawPassword[i] === `a` || rawPassword[i] === `e` || rawPassword[i] === `i` || rawPassword[i] === `o` || rawPassword[i] === `u`) {
            if (indexReplacement === replacement.length) {
                indexReplacement = 0;
                rawPassword.splice(i, 1, replacement[indexReplacement]);
                indexReplacement++;
            } else {
                rawPassword.splice(i, 1, replacement[indexReplacement]);
                indexReplacement++;
            }
        }
    }
    console.log(`Your generated password is ${rawPassword.reverse().join(``)}`);
}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)