function arrayRotation(array, n) {

    let temp = 0;

    for (let i = 0; i < n; i++) {
        temp = array[0]
        for (let j = 1; j < array.length; j++) {
            array[j - 1] = array[j]
        }
        array[array.length - 1] = temp;
    }
    console.log(array.join(` `))
}
