function arrayToNums(array) {

    let sum = 0;
    let array1 = array;
    let array2 = [];

    if (array1.length === 1) {
        let num = array[0];
        console.log(num);
        return;
    }

    for (let i of array1) {
        for (let j = 0; j < array1.length - 1; j++) {
            sum = array1[j] + array1[j + 1];
            array2.push(sum);
            if (j === array1.length - 2) {
                array1 = array2;
                array2 = [];
            }

        }
    }
    console.log(sum);
}
