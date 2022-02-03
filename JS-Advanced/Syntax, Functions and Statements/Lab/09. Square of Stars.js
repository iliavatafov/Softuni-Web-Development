function solve(input) {
    for (let i = 0; i < input; i++) {
        let printLine = ``;
        for (let j = 0; j < input; j++) {
            printLine += `* `;
        }
        console.log(printLine);
    }
}