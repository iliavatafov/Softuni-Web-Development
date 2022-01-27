function add(array) {

    let sumArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumArray += array[i];
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        sumModifiedArray += array[i];
    }
    console.log(array);
    console.log(sumArray);
    console.log(sumModifiedArray);
}
