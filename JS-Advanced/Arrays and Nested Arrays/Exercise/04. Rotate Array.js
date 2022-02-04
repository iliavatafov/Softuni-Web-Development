function solve(arr, num) {

    let arrLength = arr.length;

    for (let i = 0; i < num; i++) {

        let lastElement = arr.pop();
        arr.unshift(lastElement);

        if (i === arrLength - 1) {
            break;
        }
    }

    console.log(arr.join(` `));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    4

)