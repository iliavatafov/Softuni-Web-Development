function solve(input) {
    let pattern = /(?<chars>[^\d]+)(?<number>\d(\d+)?)/g
    let match = pattern.exec(input);
    let print = [];

    while (match !== null) {
        let charToUpperCase = match[1].toUpperCase();
        for (let i = 0; i < Number(match[2]); i++) {

            print.push(charToUpperCase);
        }
        match = pattern.exec(input)
    }

    let uniqueChars = []
    
    print.join(``).split(``).forEach(x => {
        if (!uniqueChars.includes(x)) {
            uniqueChars.push(x);
        }
    });

    console.log(`Unique symbols used: ${uniqueChars.length}`)
    console.log(print.join(``))

}

solve(`aSd12&5s@14`)