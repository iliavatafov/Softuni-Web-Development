function focused() {
    let allInputElements = document.querySelectorAll(`input`);

    for (let element of allInputElements) {
        element.addEventListener(`focus`, onFocuse);
        element.addEventListener(`blur`, outOfFocus);
    }

    function onFocuse(e) {
        e.currentTarget.parentNode.className = `focused`;
    }

    function outOfFocus(e) {
        e.currentTarget.parentNode.className = ``;
    }
}