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
    console.log(letter.join(` `))
}

solve(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)