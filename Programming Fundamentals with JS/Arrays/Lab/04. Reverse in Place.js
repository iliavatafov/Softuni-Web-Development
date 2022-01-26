function reverseStrings(array) {

    let result = [];
    let counter = 0;

    for (let i = 0; i < array.length / 2; i++) {
        let k = array.length - 1 - i;
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    console.log(array.join(" "));
}