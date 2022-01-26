function theLift(arr) {

    let que = Number(arr.shift());

    let cabins = arr.toString().split(` `).map(x => Number(x));

    let capacity = 0;

    for (let cabin = 0; cabin < cabins.length; cabin++) {
        if (cabins[cabin] < 4) {
            capacity = 4 - cabins[cabin];
            if (que < capacity) {
                cabins[cabin] += que;
                que = 0;
                console.log(`The lift has empty spots!`);
                console.log(cabins.join(` `));
                return;
            } else if (que === capacity && cabin === cabins.length - 1) {
                cabins[cabin] += que;
                que = 0;
                console.log(cabins.join(` `))
                return;
            } else {
                que -= capacity;
                cabins[cabin] += capacity;
                if (que === 0 && cabin === cabins.length - 1) {
                    console.log(`The lift has empty spots!`);
                    console.log(cabins.join(` `));
                    return;
                }
            }
        }
    }

    console.log(`There isn't enough space! ${que} people in a queue!`);
    console.log(cabins.join(` `));

}


theLift([
    "8",
    "0 0 0"
]

)

