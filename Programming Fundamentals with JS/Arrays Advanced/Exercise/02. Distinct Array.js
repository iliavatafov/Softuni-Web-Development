function distinctArray(numbers) {

    let resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (!resultArray.includes(currentNumber)) {
            resultArray.push(currentNumber);
        }
    }
    console.log(resultArray.join(` `));

}
