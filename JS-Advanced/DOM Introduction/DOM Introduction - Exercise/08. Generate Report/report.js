function generateReport() {

    let colsHeaderData = Array.from(document.querySelectorAll(`thead tr th input`));
    let numberOfRows = document.querySelectorAll(`tbody tr td:nth-child(1)`).length;

    let resultArray = [];



    for (let i = 0; i < numberOfRows; i++) {

        let currentObject = {};

        for (let heading of colsHeaderData) {

            if (heading.checked) {
                let trChaildNumber = colsHeaderData.indexOf(heading) + 1;
                let colData = document.querySelectorAll(`tbody tr td:nth-child(${trChaildNumber}`);
                let propertyName = heading.name;
                let propertyValue = colData[i].textContent;
                currentObject[propertyName] = propertyValue;
            }
        }

        resultArray.push(currentObject);
    }

    document.getElementById('output').value = JSON.stringify(resultArray);

}