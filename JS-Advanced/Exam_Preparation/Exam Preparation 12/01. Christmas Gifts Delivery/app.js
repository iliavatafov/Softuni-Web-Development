function solution() {

    document.querySelector('button').addEventListener('click', addGift);
    const listOfGiftsUl = document.querySelector('.card ul');

    const cardSections = document.querySelectorAll('.card')

    function addGift(ev) {
        ev.preventDefault();

        let result = [];

        const inputElement = document.querySelector('input');

        const li = e('li', { class: 'gift' }, inputElement.value);
        const sendBtn = e('button', { id: 'sendButton' }, 'Send', li);
        const discardBtn = e('button', { id: 'discardButton' }, 'Discard', li);

        sendBtn.addEventListener('click', onSend.bind(null, li, e('li', { class: 'gift' }, inputElement.value)), ev);
        discardBtn.addEventListener('click', onDiscard.bind(null, li, e('li', { class: 'gift' }, inputElement.value)), ev);

        result.push(li);
        Array.from(listOfGiftsUl.querySelectorAll('li')).map(e => result.push(e));
        const sortedLiElements = result.sort((a, b) => a.innerText.localeCompare(b.innerText));
        sortedLiElements.forEach(e => listOfGiftsUl.appendChild(e));

        inputElement.value = '';
    }

    function onDiscard(li, element, ev) {
        ev.preventDefault();

        cardSections[3].querySelector('ul').appendChild(element);
        li.remove();
    }

    function onSend(li, element, ev) {
        ev.preventDefault();

        cardSections[2].querySelector('ul').appendChild(element);
        li.remove();
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
        }

        return element;
    }
}