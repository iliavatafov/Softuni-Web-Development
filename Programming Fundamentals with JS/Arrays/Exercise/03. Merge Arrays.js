function mergeArrays(array, array1) {

    let array2 = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array2.push(Number(array[i]) + Number(array1[i]));
        } else {
            array2.push(`` + array[i] + array1[i]);
        }
    }
    console.log(array2.join(" - "));
}
