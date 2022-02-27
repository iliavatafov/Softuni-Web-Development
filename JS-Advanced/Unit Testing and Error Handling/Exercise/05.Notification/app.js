function notify(message) {

    let notificationDivElement = document.querySelector(`#notification`);

    notificationDivElement.textContent = message;
    notificationDivElement.style.display = `block`;

    notificationDivElement.addEventListener(`click`, hideMessage);

    function hideMessage(e) {
        e.target.style.display = `none`;
        textMessageElement = e.target;
    }

}