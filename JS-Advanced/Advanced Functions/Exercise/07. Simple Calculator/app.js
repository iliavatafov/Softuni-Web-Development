function calculator() {

    let selectorOne
    let selectorTwo
    let resultSelect

    function init(selector1, selector2, resultSelector) {
        selectorOne = document.querySelector(selector1);
        selectorTwo = document.querySelector(selector2);
        resultSelect = document.querySelector(resultSelector);
    }

    function add() {
        resultSelect.value = Number(selectorOne.value) + Number(selectorTwo.value);
    }

    function subtract() {
        resultSelect.value = Number(selectorOne.value) - Number(selectorTwo.value);
    }

    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
calculate.add()
calculate.subtract()