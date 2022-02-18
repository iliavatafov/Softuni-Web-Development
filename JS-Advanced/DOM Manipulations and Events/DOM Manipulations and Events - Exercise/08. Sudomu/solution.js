function solve() {

    let checkButtonElement = document.querySelector(`tfoot tr td button`);
    let clearButtonElement = document.querySelector(`tfoot tr td button:nth-of-type(2)`);

    let inputElements = document.querySelectorAll(`#exercise tbody tr td input`);
    let resultTextElement = document.querySelector(`#check p`);

    let tableElement = document.querySelector(`table`);

    checkButtonElement.addEventListener(`click`, checkResult);
    clearButtonElement.addEventListener(`click`, clearResult);

    function checkResult() {

        let matrix = [
            [inputElements[0].value, inputElements[1].value, inputElements[2].value],
            [inputElements[3].value, inputElements[4].value, inputElements[5].value],
            [inputElements[6].value, inputElements[7].value, inputElements[8].value]
        ];

        isSudomu = true;

        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }

        if (isSudomu) {

            tableElement.style.border = `2px solid green`;
            resultTextElement.style.color = `green`;
            resultTextElement.textContent = `You solve it! Congratulations!`;

        } else {

            tableElement.style.border = `2px solid red`;
            resultTextElement.style.color = `red`;
            resultTextElement.textContent = `NOP! You are not done yet...`;

        }
    }

    function clearResult() {

        for (let element of inputElements) {
            element.value = ``;
        }

        let tableElement = document.querySelector(`table`);
        tableElement.style.border = ``;

        let resultTextElement = document.querySelector(`#check p`);
        resultTextElement.textContent = ``;
    }
}