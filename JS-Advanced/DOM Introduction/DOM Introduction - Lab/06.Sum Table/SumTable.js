function sumTable() {
    let numberElements = document.querySelectorAll(`td:nth-child(2):not(#sum)`);
    let sum = document.querySelector(`#sum`);
    let total = 0;
    for (let num of numberElements) {
        total += Number(num.textContent);
    }

    sum.textContent = total;
    return sum;
}