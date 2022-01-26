function topNumber(array) {

    let result = [];
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                counter++;
                if (counter === array.length - i - 1) {
                    result.push(array[i]);
                }
            }
        }
        counter = 0;
    }
    result.push(array[array.length - 1]);
    console.log(result.join(` `))
}
