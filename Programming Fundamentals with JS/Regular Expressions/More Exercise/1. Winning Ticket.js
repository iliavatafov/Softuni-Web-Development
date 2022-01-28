function solve(inp) {

    let input = inp.split(`, `)
    let pattern = /([@|$|^|#])\1\1\1\1\1\1?\1?\1?\1?/;

    for (let line of input) {
        line = line.trim();
        let elementLength = line.length;
        if (elementLength > 20 || elementLength < 20) {
            console.log(`invalid ticket`);
        } else {
            let firstPart = line.slice(0, 10);
            let secondPart = line.slice(10);
            let matchOne = pattern.exec(firstPart);
            let matchTwo = pattern.exec(secondPart);
            if (matchOne === null || matchTwo === null) {
                console.log(`ticket "${line}" - no match`);
            } else if (matchOne[0] === matchTwo[0]) {
                if (matchOne[0].length === 10) {
                    console.log(`ticket "${line}" - 10${matchTwo[1]} Jackpot!`)
                } else {
                    console.log(`ticket "${line}" - ${matchOne[0].length}${matchTwo[1]}`)
                }
            } else {
                if (matchOne[0].length < matchTwo[0].length) {
                    console.log(`ticket "${line}" - ${matchOne[0].length}${matchOne[1]}`)
                } else {
                    console.log(`ticket "${line}" - ${matchTwo[0].length}${matchTwo[1]}`)
                }

            }
        }
    }
}