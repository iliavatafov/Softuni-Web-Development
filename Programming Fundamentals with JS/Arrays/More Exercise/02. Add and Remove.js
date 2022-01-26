function addAndRemove(arr) {

    let newArray = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === `add`) {
            newArray.push(i + 1);
        } else {
            newArray.pop();
        }
    }
    if (newArray.length >= 1) {
        console.log(newArray.join(` `));
    } else {
        console.log(`Empty`)
    }
}
