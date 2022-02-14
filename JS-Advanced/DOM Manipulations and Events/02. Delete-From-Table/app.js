function deleteByEmail() {

    let emailElement = document.querySelector(`[name="email"]`);

    let emailTdElements = document.querySelectorAll(`tbody tr td:nth-child(2)`);

    let resultElement = document.getElementById(`result`);


    for (let currentEmailElement of emailTdElements) {
        if (emailElement.value === currentEmailElement.textContent) {
            currentEmailElement.parentNode.remove()
            resultElement.textContent = `Deleted.`
        }
    }

    if (resultElement.textContent === ``) {
        resultElement.textContent = `Not found.`
    }

}