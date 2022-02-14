function solve() {

    let addButtonElements = document.querySelectorAll(`.add-product`)
    let textAreaElement = document.querySelector(`textarea`);
    let checkOutElement = document.querySelector(`.checkout`);

    let cart = {};

    for (let buttonElement of addButtonElements) {

        buttonElement.addEventListener(`click`, (e) => {

            let currentProductElement = e.target.parentNode.parentNode;

            let productName = currentProductElement.childNodes[3].childNodes[1].textContent;
            let productPrice = Number(currentProductElement.childNodes[7].textContent).toFixed(2);

            if (!cart.hasOwnProperty(productName)) {
                cart[productName] = Number(productPrice);
            } else {
                cart[productName] += Number(productPrice);
            }

            textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
        });
    }

    checkOutElement.addEventListener(`click`, (e) => {

                let totalPrice = Object.values(cart).reduce((a, b) => a + b, 0);
                let productsList = Object.keys(cart);

                textAreaElement.textContent += `You bought ${productsList.join(`, `)} for ${totalPrice.toFixed(2)}.`;
                addButtonElements.disabled = true;
                for (let el of addButtonElements) {
                   el.disabled = true;
                }
                checkOutElement. disabled = true;
    });

}