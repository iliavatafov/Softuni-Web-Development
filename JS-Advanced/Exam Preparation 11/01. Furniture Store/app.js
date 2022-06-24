window.addEventListener('load', solve);

function solve() {

    let totalPrice = 0;

    document.getElementById('add').addEventListener('click', onAdd);

    const furnitureListElement = document.querySelector('#furniture-list');

    function onAdd(ev) {
        ev.preventDefault();

        const model = document.getElementById('model');
        const year = document.getElementById('year');
        const description = document.getElementById('description');
        const price = document.getElementById('price');

        if (model.value != '' && description.value != '' && year.value > 0 && price.value > 0) {

            const infoTr = e('tr', { class: 'info' });
            e('td', {}, model.value, infoTr);
            e('td', {}, Number(price.value).toFixed(2), infoTr);
            const internalTd = e('td', {}, null, infoTr);
            const moreBtn = e('button', { class: 'moreBtn' }, 'More Info', internalTd);
            const buyBtn = e('button', { class: 'buyBtn' }, 'Buy it', internalTd);
            const hideTr = e('tr', { class: 'hide' });
            e('td', {}, `Year: ${year.value}`, hideTr);
            e('td', { colspan: '3' }, `Description: ${description.value}`, hideTr);

            furnitureListElement.appendChild(infoTr);
            furnitureListElement.appendChild(hideTr);

            moreBtn.addEventListener('click', showMore.bind(null, hideTr, moreBtn, ev));
            buyBtn.addEventListener('click', onBuy.bind(null, infoTr, hideTr, price.value, ev));

            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';
        }
    }

    function onBuy(infoTr, hideTr, price, ev) {
        ev.preventDefault();

        totalPrice += Number(price)

        document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
        infoTr.remove();
        hideTr.remove();
    }

    function showMore(hideTr, moreBtn, ev) {
        ev.preventDefault();

        if (hideTr.style.display == '' || hideTr.style.display == 'none') {
            hideTr.style.display = 'contents';
            moreBtn.textContent = 'Less Info';
        } else {
            hideTr.style.display = 'none';
            moreBtn.textContent = 'More Info';
        }
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
            console.log(parentNode)
            parentNode.appendChild(element);
        }

        return element;
    }
}