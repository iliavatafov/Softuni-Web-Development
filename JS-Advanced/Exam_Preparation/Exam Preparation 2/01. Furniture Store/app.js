window.addEventListener('load', solve);

function solve() {
    const inputElements = document.querySelectorAll(`input, textarea`);

    const addButton = document.querySelector(`#add`);

    const furnitureListElement = document.querySelector(`#furniture-list`);

    const totalPrice = 0;
    const tdTotalPriceElement = document.querySelector(`.total-price`);

    addButton.addEventListener(`click`, addNewItem);

    function addNewItem(e) {
        e.preventDefault();

        let [modelElement, yearElement, descriptionElement, priceElement] = Array.from(inputElements);

        if (!Array.from(inputElements).some(element => element.value == ``)) {

            if (!isNaN(Number(yearElement.value)) && Number(yearElement.value) > 0 &&
                !isNaN(Number(priceElement.value)) && Number(priceElement.value) > 0) {

                const trInfo = elementCreator(`tr`, `class`, `info`, undefined);
                const tdModel = elementCreator(`td`, undefined, undefined, modelElement.value);
                const tdPrice = elementCreator(`td`, undefined, undefined, Number(priceElement.value).toFixed(2))
                trInfo.appendChild(tdModel);
                trInfo.appendChild(tdPrice);

                const tdButtons = elementCreator(`td`, undefined, undefined, undefined);
                const moreBtn = elementCreator(`button`, `class`, `moreBtn`, `More Info`);
                const buyBtn = elementCreator(`button`, `class`, `buyBtn`, `Buy it`);
                tdButtons.appendChild(moreBtn);
                tdButtons.appendChild(buyBtn);
                trInfo.appendChild(tdButtons)

                const trHide = elementCreator(`tr`, `class`, `hide`, undefined);
                const tdYear = elementCreator(`td`, undefined, undefined, `Year: ${Number(yearElement.value)}`);
                const tdDescription = elementCreator(`td`, `colspan`, `3`, `Description: ${descriptionElement.value}`);
                trHide.appendChild(tdYear);
                trHide.appendChild(tdDescription);

                furnitureListElement.appendChild(trInfo);
                furnitureListElement.appendChild(trHide);

                buyBtn.addEventListener(`click`, buyIt.bind(null, trInfo, trHide, tdPrice, tdTotalPriceElement));

                moreBtn.addEventListener(`click`, () => {
                    if (trHide.getAttribute(`style`) == `` || !trHide.getAttribute(`style`)) {
                        trHide.setAttribute(`style`, `display: contents;`)
                        moreBtn.textContent = `Less Info`;
                    } else {
                        trHide.setAttribute(`style`, ``);
                        moreBtn.textContent = `More info`;
                    }
                });

            }

            Array.from(inputElements).map(x => x.value = ``);

        }

    }

    function buyIt(trInfo, trHide, tdPrice, tdTotalPriceElement) {
        let currentAmount = Number(tdTotalPriceElement.textContent)
        tdTotalPriceElement.textContent = (Number(tdPrice.textContent) + currentAmount).toFixed(2);
        trInfo.remove();
        trHide.remove();
    }


    function elementCreator(elementType, attributType, attributeValue, innerText) {

        const newElement = document.createElement(elementType);

        if (innerText !== undefined) {
            newElement.textContent = innerText;
        }

        if (attributType !== undefined && attributeValue !== undefined) {
            newElement.setAttribute(attributType, attributeValue);
        }

        return newElement;
    }

}