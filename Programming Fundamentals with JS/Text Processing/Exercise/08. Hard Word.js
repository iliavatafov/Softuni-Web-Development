function solve(arr) {
    let letter = arr.shift().split(` `);
    let words = arr.shift();

    for (let element of letter) {
        if (element.includes(`_`)) {
            let count = 0;
            let temp = ``;
            for (let symbol of element) {
                if (symbol === `_`) {
                    count++;
                } else if (symbol === `.` || symbol === `,`) {
                    temp = symbol;
                } else {
                    break;
                }
            }
            for (let word of words) {
                if (count === word.length) {
                    if (temp === ``) {
                        let index = letter.indexOf(element);
                        letter.splice(index, 1, word);
                        break;
                    } else {
                        let index = letter.indexOf(element);
                        letter.splice(index, 1, word + temp);
                        break;
                    }

                }
            }
        }
    }
    console.log(letter.join(` `));
}