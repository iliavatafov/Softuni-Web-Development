function solve(input) {
    let sortedInput = input.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= sortedInput.length; i++) {
        console.log(`${i}.${sortedInput[i - 1]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"])