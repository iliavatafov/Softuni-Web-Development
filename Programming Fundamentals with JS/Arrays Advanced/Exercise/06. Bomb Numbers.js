function bombNumbers(numbers, bombNum) {
    let bombNumber = bombNum[0];
    let power = bombNum[1];
    let result = 0;

    while (numbers.includes(bombNumber)) {

        let index = numbers.indexOf(bombNumber);
        let elementsForRemove = power * 2 + 1;
        let startElement = index - power;

        if (startElement < 0) {
            startElement = 0;
        }
        numbers.splice(startElement, elementsForRemove);
    }
    let finalResult = numbers.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(finalResult)
}
