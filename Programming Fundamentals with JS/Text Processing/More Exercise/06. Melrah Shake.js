function solve(arr) {
    let base = arr.shift();
    let pattern = arr.shift();

    while (pattern.length > 0) {
        let startIndex = base.indexOf(pattern);
        let lastIndex = base.lastIndexOf(pattern);
        if (startIndex === -1 || lastIndex === -1) {
            console.log(`No shake.`);
            console.log(base);
            break;
        } else {
            console.log(`Shaked it.`)
            let lengthOfPattern = pattern.length;
            base = base.split(``)
            base.splice(startIndex, lengthOfPattern)
            base.splice(lastIndex - lengthOfPattern, lengthOfPattern)
            let indexToDelete = lengthOfPattern / 2;
            pattern = pattern.split(``);
            pattern.splice(indexToDelete, 1);
            pattern = pattern.join(``)
            base = base.join(``)
        }
    }
    if (pattern.length === 0) {
        console.log(`No shake.`);
        console.log(base);
    }
}

solve(["##mtm!!mm.mm*mtm.#",
"mm"]
)