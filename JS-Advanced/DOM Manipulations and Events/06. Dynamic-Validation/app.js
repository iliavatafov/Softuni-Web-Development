function validate() {
    let inputEmailElement = document.getElementById(`email`);

    inputEmailElement.addEventListener(`change`, validation);

    function validation(e) {
        let emailElementText = e.target.value;

        let pattern = /^([a-z]+@[a-z]+[.][a-z]+)$/g

        if (pattern.exec(emailElementText)) {
            e.target.className = ``;
        } else {
            e.target.className = `error`
        }

    }
}