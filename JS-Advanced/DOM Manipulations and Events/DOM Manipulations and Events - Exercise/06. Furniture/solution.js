function solve() {

    let inputButtonElement = document.querySelector(`#exercise button`);
    let tbodyElement = document.querySelector(`tbody`);

    let firstProductButtonElement = document.querySelector(`input[type="checkbox"]`);
    firstProductButtonElement.disabled = false;

    inputButtonElement.addEventListener(`click`, createNewProduct);

    let buyButtonElement = document.querySelector(`button:nth-of-type(2)`);
    let resultTextAreaElement = document.querySelector(`#exercise textarea:nth-of-type(2)`);

    let products = [];
    let totalPrice = 0;
    let decorationFactorValues = [];

    buyButtonElement.addEventListener(`click`, buy);

    function buy(e) {

        let checkBoxElements = document.querySelectorAll(`input[type="checkbox"]`);

        for (let checkBoxElement of checkBoxElements) {

            if (checkBoxElement.checked) {

                let name = checkBoxElement.parentNode.parentNode.querySelector(`td:nth-of-type(2) p`).textContent;
                products.push(name);

                let price = checkBoxElement.parentNode.parentNode.querySelector(`td:nth-of-type(3) p`).textContent;
                totalPrice += Number(price);

                let decorationValue = checkBoxElement.parentNode.parentNode.querySelector(`td:nth-of-type(4) p`).textContent;
                decorationFactorValues.push(Number(decorationValue));
            }
        }

        let decorationFactorCount = decorationFactorValues.length;
        let totalDecorationFactor = Array.from(decorationFactorValues).reduce((a, b) => a + b, 0);

        let averageDecorationFactor = totalDecorationFactor / decorationFactorCount;

        resultTextAreaElement.textContent = `Bought furniture: ${products.join(`, `)}\n` + `Total price: ${totalPrice.toFixed(2)}\n` + `Average decoration factor: ${averageDecorationFactor}`;

    }

    function createNewProduct(e) {

        let inputValue = e.target.parentNode.querySelector(`textarea`).value;
        let input = JSON.parse(inputValue);

        for (let currentObject of input) {

          let name = currentObject.name;
          let imgLink = currentObject.img;
          let price = Number(currentObject.price);
          let decFactor = Number(currentObject.decFactor);
  
          let newRow = document.createElement(`tr`);
  
          let imgLinkTd = document.createElement(`td`);
          let img = document.createElement(`img`);
          img.src = imgLink;
          imgLinkTd.appendChild(img);
          newRow.appendChild(imgLinkTd)
  
          let nameTd = document.createElement(`td`);
          let nameP = document.createElement(`p`);
          nameP.textContent = name;
          nameTd.appendChild(nameP);
          newRow.appendChild(nameTd)
  
          let priceTd = document.createElement(`td`);
          let priceP = document.createElement(`p`);
          priceP.textContent = price;
          priceTd.appendChild(priceP)
          newRow.appendChild(priceTd)
  
          let decFactorTd = document.createElement(`td`);
          let decP = document.createElement(`p`);
          decP.textContent = decFactor;
          decFactorTd.appendChild(decP);
          newRow.appendChild(decFactorTd);
  
          let checkBox = document.createElement(`td`);
          let input = document.createElement(`input`);
          input.type = `checkbox`;
          checkBox.appendChild(input);
          newRow.appendChild(checkBox);
  
          tbodyElement.appendChild(newRow);

        }
    }

}