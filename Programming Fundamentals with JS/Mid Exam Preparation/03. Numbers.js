function numbers(list) {
    let arr = list.split(` `).map(x => Number(x));
    let average = arr => arr.reduce((a, b) => a + b) / arr.length;
    let result = [];
    flag = false;
    let counter = 0;
    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average(arr)) {
            result.push(arr[i]);
            flag = true;
            counter++;
            if (counter === 5) {
                break;
            }
        }
    }
    if (flag) {
        console.log(result.join(` `));
    } else {
        console.log(`No`);
    }
}