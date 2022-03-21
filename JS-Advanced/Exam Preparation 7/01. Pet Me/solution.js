function solve() {

    const inputElements = document.querySelectorAll(`input`);

    const nameElement = inputElements[0];
    const ageElement = inputElements[1];
    const kindElement = inputElements[2];
    const currentOwnerElement = inputElements[3];

    const addCurrentOwnerButton = document.querySelector(`#container button`);

    const adoptionUlElement = document.querySelector(`#adoption > ul`);

    const adoptedUlElement = document.querySelector(`#adopted > ul`);

    addCurrentOwnerButton.addEventListener(`click`, addNewPet);

    function addNewPet(ev) {

        ev.preventDefault()

        if (nameElement.value && ageElement.value &&
            !isNaN(ageElement.value) && kindElement.value &&
            currentOwnerElement.value) {

            const contactBtn = e(`button`, {}, `Contact with owner`)

            const pet = e(`li`, {},
                e(`p`, {},
                    e(`strong`, {}, nameElement.value),
                    ` is a `,
                    e(`strong`, {}, ageElement.value),
                    ` year old `,
                    e(`strong`, {}, kindElement.value),
                ),
                e(`span`, {}, `Owner: ${currentOwnerElement.value}`),
                contactBtn,
            );

            contactBtn.addEventListener(`click`, contact);

            adoptionUlElement.appendChild(pet);

            console.log(document.querySelector("#adoption > ul"));

            nameElement.value = ``;
            ageElement.value = ``;
            kindElement.value = ``;
            currentOwnerElement.value = ``;

            function contact() {
                const confirmInput = e(`input`, { placeholder: `Enter your names` })
                const comfirmBtn = e(`button`, {}, `Yes! I take it!`)
                const confirnnDiv = e(`div`, {},
                    confirmInput,
                    comfirmBtn,
                );

                comfirmBtn.addEventListener(`click`, adopt.bind(null, confirmInput, pet));

                contactBtn.remove();
                pet.appendChild(confirnnDiv)
            }

        }

    }

    function adopt(confirmInput, pet) {

        const newOwner = confirmInput.value.trim();

        if (newOwner === ``) {
            return;
        }

        const checkBtn = e(`button`, {}, `Checked`);
        checkBtn.addEventListener(`click`, check.bind(null, pet));

        pet.querySelector(`div`).remove();
        pet.appendChild(checkBtn);
        pet.querySelector(`span`).textContent = `New Owner: ${newOwner}`;

        adoptedUlElement.appendChild(pet)

    }

    function check(pet) {
        pet.remove();
    }

    function e(type, attr, ...content) {

        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == `string` || typeof item == `number`) {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}