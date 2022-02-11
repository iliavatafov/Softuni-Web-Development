function search() {

    let towns = document.querySelectorAll(`li`);
    let input = document.querySelector(`#searchText`).value;
    let result = document.querySelector(`#result`);
    let count = 0;

    for (let currentTown of towns) {

        currentTown.style.fontWeight = `normal`;
        currentTown.style.textDecoration = `none`;

        if (currentTown.textContent.includes(input)) {
            count++;
            currentTown.style.fontWeight = `bold`;
            currentTown.style.textDecoration = `underline`;
        }
    }

    result.textContent = `${count} matches found`;
}