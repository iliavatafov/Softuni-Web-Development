function solve() {

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {

        let rowsToBeChecked = document.querySelectorAll(`tbody tr`);
        let input = document.querySelector(`#searchField`);

        for (let row of rowsToBeChecked) {

            row.classList.remove(`select`);
            let rowElements = row.querySelectorAll(`td`);

            for (let currentElement of rowElements) {

                if (input.value !== `` && currentElement.textContent.includes(input.value)) {
                    row.className = `select`;
                }
            }
        }
        input.value = ``;
    }
}