function solve(string) {

    let alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14,
        o: 15, p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21, v: 22,
        w: 23, x: 24, y: 25, z: 26,
    }

    let base = [];
    let result = 0;

    string.split(` `).forEach(x => {
        if (x !== ``) {
            base.push(x);
        }
    });

    for (let element of base) {
        element = element.split(``);
        let firstChar = element.shift();
        let lastChar = element.pop();
        let number = Number(element.join(``));

        result = frontCharsOperations(firstChar, number, result, alphabet);
        result = backCharsOperations(lastChar, result, alphabet);
    }

    console.log(result.toFixed(2));

    function frontCharsOperations(firstChar, number, result, alphabet) {
        let position = alphabet[firstChar.toLowerCase()];
        if (firstChar === firstChar.toUpperCase()) {
            result += number / position;
            return result;
        } else {
            result += number * position;
            return result;
        }
    }

    function backCharsOperations(lastChar, result, alphabet) {
        let position = alphabet[lastChar.toLowerCase()];
        if (lastChar === lastChar.toUpperCase()) {
            result -= position;
            return result;
        } else {
            result += position;
            return result;
        }
    }
}

solve('a1A')