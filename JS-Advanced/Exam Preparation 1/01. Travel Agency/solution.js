window.addEventListener('load', solution);

function solution() {

    const inputElements = document.querySelectorAll(`input`);

    const fname = inputElements[0];
    const email = inputElements[1];
    const phone = inputElements[2];
    const address = inputElements[3];
    const postalCode = inputElements[4];

    const submitBtn = document.querySelector(`#submitBTN`);
    const editBtn = document.querySelector(`#editBTN`);
    const continueBtn = document.querySelector(`#continueBTN`);

    const previewUlElement = document.querySelector(`#infoPreview`);

    submitBtn.addEventListener(`click`, addOrder);

    function addOrder(ev) {

        ev.preventDefault();

        if (fname.value !== `` && email.value !== ``) {

            const _fname = e(`li`, `Full Name: ${fname.value}`, previewUlElement);
            const _email = e(`li`, `Email: ${email.value}`, previewUlElement);
            const _phone = e(`li`, `Phone Number: ${phone.value}`, previewUlElement);
            const _address = e(`li`, `Address: ${address.value}`, previewUlElement);
            const _postalCode = e(`li`, `Postal Code: ${postalCode.value}`, previewUlElement);

            const elementsForRemoval = [_fname, _email, _phone, _address, _postalCode];;

            submitBtn.disabled = true;

            editBtn.disabled = false;
            continueBtn.disabled = false;

            editBtn.addEventListener(`click`, edit.bind(this, elementsForRemoval, fname.value, email.value, phone.value, address.value, postalCode.value));
            continueBtn.addEventListener(`click`, continiue);

            clearInput(fname, email, phone, address, postalCode);
        }
    }

    function continiue() {
        let blockElement = document.querySelector(`#block`);
        for (let element of Array.from(blockElement.children)) {
            element.remove();
        }

        e(`h3`, `Thank you for your reservation!`, blockElement);
    }

    function edit(elementsForRemoval, n, e, p, a, pc) {

        console.log(e);

        fname.value = n;
        email.value = e;
        phone.value = p;
        address.value = a;
        postalCode.value = pc;

        for (let element of elementsForRemoval) {
            element.remove();
        }

        editBtn.disabled = true;
        continueBtn.disabled = true;
        submitBtn.disabled = false;
    }

    function clearInput(fname, email, phone, address, postalCode) {
        fname.value = ``;
        email.value = ``;
        phone.value = ``;
        address.value = ``;
        postalCode.value = ``;
    }

    function e(type, innerText, parent) {
        const element = document.createElement(type);
        element.textContent = innerText;

        if (parent !== undefined) {
            parent.appendChild(element);
        }

        return element;
    }
}