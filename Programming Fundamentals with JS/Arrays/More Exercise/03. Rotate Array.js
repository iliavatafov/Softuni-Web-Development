function rotateArray(arr) {

    let rotations = arr.pop();

    for (i = 0; i < rotations; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length / 2 + 1 + i];
        arr[arr.length / 2 + 1 + i] = temp;
    }
    console.log(arr.join(` `));
}