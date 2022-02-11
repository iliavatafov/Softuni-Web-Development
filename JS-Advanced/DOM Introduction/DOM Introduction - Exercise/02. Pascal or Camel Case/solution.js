function solve() {

    let textElement = document.querySelector(`#text`).value;
    let typeOfCaseElement = document.querySelector(`#naming-convention`).value;

    let resultArray = [];

    if (typeOfCaseElement === `Camel Case`) {
        let arrayFromTextElement = textElement.split(` `);
        let currentElement = arrayFromTextElement.shift().toLowerCase();

        while (currentElement) {
            resultArray.push(currentElement)
            currentElement = arrayFromTextElement.shift();

            if (currentElement) {
                currentElement = currentElement.toLowerCase();
            } else {
                break;
            }

            let arrFromCurrentElement = currentElement.split(``);
            let firstLetterToUpperCase = arrFromCurrentElement[0].toUpperCase();

            arrFromCurrentElement.splice(0, 1, firstLetterToUpperCase);
            currentElement = arrFromCurrentElement.join(``);
        }
    } else if (typeOfCaseElement === `Pascal Case`) {

        let arrayFromTextElement = textElement.split(` `);
        let currentElement = arrayFromTextElement.shift().toLowerCase();

        while (currentElement) {
            currentElement = currentElement.toLowerCase();
            let arrFromCurrentElement = currentElement.split(``);
            let firstLetterToUpperCase = arrFromCurrentElement[0].toUpperCase();

            arrFromCurrentElement.splice(0, 1, firstLetterToUpperCase);
            currentElement = arrFromCurrentElement.join(``);

            resultArray.push(currentElement);
            currentElement = arrayFromTextElement.shift();
        }
    } else {
        let result = document.querySelector(`#result`);
        result.textContent = `Error!`;
        return;
    }

    let result = document.querySelector(`#result`);
    result.textContent = resultArray.join(``);

}