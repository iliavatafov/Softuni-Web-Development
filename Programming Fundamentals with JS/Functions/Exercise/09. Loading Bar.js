function loadingBar(num) {

    let print = ``;

    for (let i = 0; i <= 100; i += 10) {
        if (i < num) {
            for (let j = 10; j <= num; j += 10) {
                print += `%`;
                i = j + 10;
            }
        }
        if (i === 110) {
            break;
        }
        print += `.`;
    }
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[${print}]`);
    } else {
        console.log(`${num}% [${print}]`);
        console.log(`Still loading...`);
    }
}

