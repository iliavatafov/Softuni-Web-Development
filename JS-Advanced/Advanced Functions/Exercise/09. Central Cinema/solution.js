function solve() {

    const nameInputElement = document.querySelector(`#container input:nth-of-type(1)`);
    const hallInputElement = document.querySelector(`#container input:nth-of-type(2)`);
    const ticketPriceInputElement = document.querySelector(`#container input:nth-of-type(3)`);

    const buttonAddMovieElement = document.querySelector(`#container button`);
    const buttonClearElement = document.querySelector('#archive button');

    const moviesUlElement = document.querySelector(`#movies ul`);
    const archiveUlElement = document.querySelector(`#archive ul`);

    buttonAddMovieElement.addEventListener(`click`, e => {
        e.preventDefault();

        let name = nameInputElement.value;
        let hall = hallInputElement.value;
        let ticketPrice = ticketPriceInputElement.value;

        if (name === '' || hall === '' || ticketPrice === '') {
            return;
        }

        if (!Number(ticketPrice)) {
            return;
        }

        let li = document.createElement(`li`);
        let span = document.createElement(`span`);
        span.textContent = name;

        let strong = document.createElement(`strong`);
        strong.textContent = `Hall: ${hall}`;

        li.appendChild(span);
        li.appendChild(strong);

        let div = document.createElement(`div`);

        let strongTicketPrice = document.createElement(`strong`);
        strongTicketPrice.textContent = Number(ticketPrice).toFixed(2);

        let input = document.createElement(`input`);
        input.placeholder = `Tickets Sold`;

        let button = document.createElement(`button`);
        button.textContent = `Archive`;
        buttonArchive = button;

        div.appendChild(strongTicketPrice);
        div.appendChild(input);
        div.appendChild(button);
        li.appendChild(div);

        moviesUlElement.appendChild(li);

        nameInputElement.value = ``;
        hallInputElement.value = ``;
        ticketPriceInputElement.value = ``;

        buttonArchive.addEventListener('click', (e) => {
            e.preventDefault();

            let ticketCount = Number(e.target.parentNode.querySelector(`input`).value);

            if (!ticketCount) {
                return;
            }

            let totalPrice = ticketPrice * ticketCount;

            let liArchiveElement = document.createElement('li');

            let spanArchiveElement = document.createElement('span');
            spanArchiveElement.textContent = e.currentTarget.parentElement.parentElement.firstChild.textContent;
            liArchiveElement.appendChild(spanArchiveElement);

            let strongArchiveElement = document.createElement('strong');
            strongArchiveElement.textContent = `Total amount: ${Number(totalPrice).toFixed(2)}`
            liArchiveElement.appendChild(strongArchiveElement);

            let buttonDeleteElement = document.createElement('button');
            buttonDeleteElement.textContent = 'Delete';
            liArchiveElement.appendChild(buttonDeleteElement);

            archiveUlElement.appendChild(liArchiveElement);

            e.currentTarget.parentElement.parentElement.remove()

            buttonDeleteElement.addEventListener(`click`, (e) => {
                e.preventDefault();
                e.target.parentNode.parentNode.remove();
            });

            buttonClearElement.addEventListener(`click`, (e) => {
                e.preventDefault();

                while (archiveUlElement.firstChild) {
                    archiveUlElement.removeChild(archiveUlElement.firstChild);
                }
            });
        });
    });
}