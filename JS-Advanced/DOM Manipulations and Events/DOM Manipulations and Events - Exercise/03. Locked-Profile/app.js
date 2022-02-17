function lockedProfile() {

    let buttonElements = document.querySelectorAll(`button`);

    for (let currentButtonElement of buttonElements) {
        currentButtonElement.addEventListener(`click`, checkPermissionsAndShowInfo)
    }

    function checkPermissionsAndShowInfo(e) {

        let radioButtonElement = e.target.parentNode.querySelector(`input[value="unlock"]`);

        if (radioButtonElement.checked) {

            if (e.target.textContent === `Show more`) {

                let hiddenDivFiledElement = e.target.parentNode.querySelector(`div`);
                hiddenDivFiledElement.style.display = `block`;
                e.target.textContent = `Hide it`;

            } else if (e.target.textContent === `Hide it`) {

                let hiddenDivFiledElement = e.target.parentNode.querySelector(`div`);
                hiddenDivFiledElement.style.display = `none`;
                e.target.textContent = `Show more`
            }
        }
    }
}