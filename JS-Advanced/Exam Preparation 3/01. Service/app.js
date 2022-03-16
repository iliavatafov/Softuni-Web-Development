window.addEventListener('load', solve);

function solve() {

    const productTypeElement = document.querySelector(`#type-product`);
    const descriptionElement = document.querySelector(`#description`);
    const clientNameElement = document.querySelector(`#client-name`);
    const clientPhoneElement = document.querySelector(`#client-phone`);


    const submitButton = document.querySelector(`[type = "submit"]`);
    const clearButtonElement = document.querySelector(`.clear-btn`);

    const reciveOrdersSectionElement = document.querySelector(`#received-orders`);
    const completedOrdersDiv = document.querySelector(`#completed-orders`);

    submitButton.addEventListener(`click`, addProduct);
    clearButtonElement.addEventListener(`click`, () => {
        let elementsWithClassContainer = document.querySelectorAll(`#completed-orders .container`);

        for (let element of elementsWithClassContainer) {
            element.remove();
        }
    });

    function addProduct(e) {

        e.preventDefault();

        if (productTypeElement.value && descriptionElement.value && clientNameElement.value && clientPhoneElement.value) {

            const parentDiv = elementCreator(`div`, `class`, `container`);
            const h2 = elementCreator(`h2`, undefined, undefined, `Product type for repair: ${productTypeElement.value}`);
            const h3 = elementCreator(`h3`, undefined, undefined, `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`);
            const h4 = elementCreator(`h4`, undefined, undefined, `Description of the problem: ${descriptionElement.value}`);
            const startBtn = elementCreator(`button`, `class`, `start-btn`, `Start repair`);
            const finishBtn = elementCreator(`button`, `class`, `finish-btn`, `Finish repair`);
            finishBtn.disabled = true;

            parentDiv.appendChild(h2);
            parentDiv.appendChild(h3);
            parentDiv.appendChild(h4);
            parentDiv.appendChild(startBtn);
            parentDiv.appendChild(finishBtn);

            reciveOrdersSectionElement.appendChild(parentDiv);

            productTypeElement.value = ``;
            descriptionElement.value = ``;
            clientNameElement.value = ``;
            clientPhoneElement.value = ``;

            startBtn.addEventListener(`click`, () => {
                startBtn.disabled = true;
                finishBtn.disabled = false;

                finishBtn.addEventListener(`click`, () => {
                    parentDiv.removeChild(startBtn);
                    parentDiv.removeChild(finishBtn);

                    completedOrdersDiv.appendChild(parentDiv)
                });
            });
        }
    }

    function elementCreator(elementType, attribute, attributeValue, textContent) {

        const newElement = document.createElement(elementType);

        if (textContent != undefined) {
            newElement.textContent = textContent;
        }

        if (attribute != undefined) {
            newElement.setAttribute(attribute, attributeValue);
        }

        return newElement;
    }
}