window.addEventListener('load', solve);

function solve() {

    document.querySelector('form button').addEventListener('click', onSend);
    document.querySelector('.clear-btn').addEventListener('click', onClear)

    const receivedOrders = document.querySelector('#received-orders');
    const completeddOrders = document.querySelector('#completed-orders');

    function onSend(ev) {
        ev.preventDefault();

        let producstTypeElement = document.getElementById('type-product');
        let descriptionElement = document.getElementById('description');
        let nameElement = document.getElementById('client-name');
        let phoneElement = document.getElementById('client-phone');

        if (descriptionElement.value != '' && nameElement.value != '' && phoneElement != '') {

            const div = e('div', 'container');
            e('h2', undefined, `Product type for repair: ${producstTypeElement.value}`, div);
            e('h3', undefined, `Client information: ${nameElement.value}, ${phoneElement.value}`, div);
            e('h4', undefined, `Description of the problem: ${descriptionElement.value}`, div);
            const startBtn = e('button', 'start-btn', 'Start repair', div);
            const finishBtn = e('button', 'finish-btn', 'Finish repair', div, true);

            receivedOrders.appendChild(div);

            descriptionElement.value = '';
            nameElement.value = '';
            phoneElement.value = '';

            startBtn.addEventListener('click', onStart);

            function onStart(ev) {
                ev.preventDefault();
                startBtn.disabled = true;
                finishBtn.disabled = false;

                finishBtn.addEventListener('click', onRepair);
            }

            function onRepair(ev) {
                ev.preventDefault();

                div.removeChild(startBtn);
                div.removeChild(finishBtn);

                completeddOrders.appendChild(div);
            }
        }
    }


    function onClear(ev) {
        ev.preventDefault();
        Array.from(document.querySelectorAll('.container')).forEach(e => e.remove());
    }

    function e(elementType, classAtr, content, parentElement, disabled) {
        const element = document.createElement(elementType);

        if (disabled) {
            element.disabled = true;
        }

        if (classAtr != undefined) {
            element.classList = classAtr;
        }

        if (content != undefined) {
            element.textContent = content;
        }

        if (parentElement !== undefined) {
            parentElement.appendChild(element);
        }

        return element;
    }
}