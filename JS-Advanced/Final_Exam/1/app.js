window.addEventListener("load", solve);

function solve() {

    let profit = 0;

    document.getElementById('publish').addEventListener('click', onPublush);

    const tableBody = document.getElementById('table-body');
    const carList = document.getElementById('cars-list');

    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearlElement = document.getElementById('year');
    const fuelElement = document.getElementById('fuel');
    const originalCostlElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');

    function onPublush(ev) {
        ev.preventDefault();

        if (makeElement.value && modelElement.value &&
            yearlElement.value && fuelElement.value &&
            originalCostlElement.value && sellingPriceElement.value &&
            sellingPriceElement.value >= originalCostlElement.value) {


            const mainTr = e('tr', { class: 'row' });
            e('td', {}, makeElement.value, mainTr);
            e('td', {}, modelElement.value, mainTr);
            e('td', {}, yearlElement.value, mainTr);
            e('td', {}, fuelElement.value, mainTr);
            e('td', {}, originalCostlElement.value, mainTr);
            e('td', {}, sellingPriceElement.value, mainTr);
            const buttonTd = e('td', {}, null, mainTr);
            const editBtn = e('td', { class: 'action-btn edit' }, 'Edit', buttonTd);
            const sellBtn = e('td', { class: 'action-btn sell' }, 'Sell', buttonTd);

            tableBody.appendChild(mainTr);

            editBtn.addEventListener('click', onEdit.bind(null, makeElement.value, modelElement.value, yearlElement.value, fuelElement.value, originalCostlElement.value, sellingPriceElement.value, mainTr, ev))
            sellBtn.addEventListener('click', onSell.bind(null, mainTr, makeElement.value, modelElement.value, yearlElement.value, sellingPriceElement.value - originalCostlElement.value, ev))

            makeElement.value = '';
            modelElement.value = '';
            yearlElement.value = '';
            fuelElement.value = '';
            originalCostlElement.value = '';
            sellingPriceElement.value = '';
        }
    }

    function onSell(mainTr, make, model, year, difference, ev) {
        ev.preventDefault();

        const li = e('li', { class: 'each-list' });
        e('span', {}, `${make} ${model}`, li);
        e('span', {}, year, li);
        e('span', {}, difference, li);

        profit += Number(difference);

        carList.appendChild(li);
        document.getElementById('profit').textContent = profit.toFixed(2);
        mainTr.remove();
    }

    function onEdit(make, model, year, fuel, originalCostl, sellingPrice, mainTr, ev) {
        ev.preventDefault();

        makeElement.value = make;
        modelElement.value = model;
        yearlElement.value = year;
        fuelElement.value = fuel;
        originalCostlElement.value = originalCostl;
        sellingPriceElement.value = sellingPrice;

        mainTr.remove();
    }

    function e(type, attributes, text, parentNode) {
        const element = document.createElement(type);

        for (let [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value)
        }

        if (text) {
            element.textContent = text;
        }

        if (parentNode) {
            parentNode.appendChild(element);
            console.log(parentNode)
        }

        return element;
    }
}