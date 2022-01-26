function subsequance(arr) {

    let newArray = [];
    let biggestNum = 0;

    for (let i of arr) {
        if (i >= biggestNum) {
            biggestNum = i;
            newArray.push(i);
        }
    }
    console.log(newArray.join(` `));
}
