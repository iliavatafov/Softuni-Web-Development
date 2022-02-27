function validate() {
    let inputElement = document.querySelector(`#email`);

    let pattern = /^([a-z]+@[a-z]+[.][a-z]+)$/

    inputElement.addEventListener(`change`, (e) => {
        if (!pattern.exec(inputElement.value)) {
            inputElement.className = `error`;
        } else {
            inputElement.className = ``;
        }
    });
}